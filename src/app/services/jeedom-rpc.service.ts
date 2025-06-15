import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, map, throwError } from 'rxjs';
import { DefaultService, JsonRpcRequest, JsonRpcResponse, JsonRpcRequestParams } from '../angular-client';
import { JeedomConfig } from '../models/jeedom.model';

@Injectable({
  providedIn: 'root',
})
export class JsonRpcService {
  // la configuration de Jeedom
  // est stockée dans un BehaviorSubject pour permettre aux composants de s'abonner
  // elle contient apiKey et apiUrl
  private config = new BehaviorSubject<JeedomConfig | null>(null);
  config$ = this.config.asObservable();
  // un identifiant de requête auto-incrémenté pour chaque appel RPC
  private requestId = 0;

  constructor(private api: DefaultService, private http: HttpClient) {
    // Récupérer la configuration depuis le localStorage si disponible
    const savedConfig = localStorage.getItem('jeedomConfig');
    if (savedConfig) {
      this.config.next(JSON.parse(savedConfig));
    }
  }

  setConfig(config: JeedomConfig): void {
    localStorage.setItem('jeedomConfig', JSON.stringify(config));
    this.config.next(config);
  }

  isConfigured(): boolean {
    return this.config.value !== null;
  }

  clearConfig(): void {
    localStorage.removeItem('jeedomConfig');
    this.config.next(null);
  }
  
  call<TParams, TResult = any>(
    method: string | JsonRpcRequest.MethodEnum,
    params: JsonRpcRequestParams = {}
  ): Observable<TResult> {
    if (!this.config.value) {
      return throwError(() => new Error('Jeedom API not configured'));
    }

    /// Si le paramètre method est une chaîne de caractères, on le convertit en enum
    const methodEnum = typeof method === 'string' ? this.toMethodEnum(method.trim()) : method;
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      id: (++this.requestId),
      method: methodEnum,
      params: {
        ...params,
        apikey: this.config.value?.apiKey,
      }
    };

    return this.api.rootPost(request).pipe(
      map((res: JsonRpcResponse) => {
        if ('error' in res && res.error) {
          throw new Error(res.error.message);
        }
        return res.result as TResult;
      })
    );
  }

  private toMethodEnum(value: string): JsonRpcRequest.MethodEnum  {
    const found = Object.entries(JsonRpcRequest.MethodEnum)
        .find(([, v]) => v === value);
    if(!found) {
        throw new Error(`Jeedom RPC API Méthode inconnue : ${value}`);
    }
    return (found[1] as JsonRpcRequest.MethodEnum);
  }

}
