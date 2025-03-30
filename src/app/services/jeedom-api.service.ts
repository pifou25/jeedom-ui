import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import {
  JeedomConfig,
  JeedomApiRequest,
  JeedomApiResponse,
  JeedomDevice,
  JeedomRoom,
  JeedomPlugin,
} from '../models/jeedom.model';

@Injectable({
  providedIn: 'root',
})
export class JeedomApiService {
  private config = new BehaviorSubject<JeedomConfig | null>(null);
  config$ = this.config.asObservable();

  private requestId = 0;

  constructor(private http: HttpClient) {
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

  private createRequest(method: string, params: any = {}): JeedomApiRequest {
    return {
      jsonrpc: '2.0',
      id: (++this.requestId).toString(),
      method: method,
      params: {
        ...params,
        apikey: this.config.value?.apiKey,
      },
    };
  }

  private executeRequest(
    request: JeedomApiRequest
  ): Observable<JeedomApiResponse> {
    if (!this.config.value) {
      return throwError(() => new Error('Jeedom API not configured'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post<JeedomApiResponse>(this.config.value.apiUrl, request, { headers })
      .pipe(
        catchError((error) => {
          console.error('API error:', error);
          return throwError(
            () => new Error('Failed to communicate with Jeedom API')
          );
        })
      );
  }

  testConnection(): Observable<boolean> {
    const request = this.createRequest('ping');
    return this.executeRequest(request).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return true;
      }),
      catchError((error) => {
        console.error('Connection test failed:', error);
        return throwError(() => error);
      }),
      // Si on arrive ici, c'est que la connexion a réussi
      tap(() => true)
    );
  }

  // Retourne la liste de tous les équipements
  getDevices(): Observable<JeedomDevice[]> {
    const request = this.createRequest('eqLogic::all');
    return this.executeRequest(request).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.result as JeedomDevice[];
      })
    );
  }

  // Retourne un équipement et ses commandes ainsi que les états de celles-ci (pour les commandes de type info)
  getDeviceById(id: string): Observable<JeedomDevice> {
    const request = this.createRequest('eqLogic::fullById', { 'id': id });
    return this.executeRequest(request).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.result as JeedomDevice;
      })
    );
  }

  // Retourne tous les équipements appartenant à l’objet (pièce) spécifié
  getDevicesByRoom(object_id: string): Observable<JeedomDevice[]> {
    const request = this.createRequest('eqLogic::byObjectId', { 'object_id': object_id });
    return this.executeRequest(request).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.result as JeedomDevice[];
      })
    );
  }

  // Retourne la liste de tous les objets (pièces)
  getRooms(): Observable<JeedomRoom[]> {
    const request = this.createRequest('object::all');
    return this.executeRequest(request).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.result as JeedomRoom[];
      })
    );
  }

  // Retourne un objet, ses équipements et pour chaque équipement toutes ses commandes ainsi que les états de cellse-ci (pour les commandes de type info)
  getFullRoom(id: string): Observable<JeedomRoom> {
    const request = this.createRequest('object::fullById', { 'id': id });
    return this.executeRequest(request).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.result as JeedomRoom;
      })
    );
  }

  // Retourne la liste de tous les plugins
  getPlugins(): Observable<JeedomPlugin[]> {
    const request = this.createRequest('plugin::listPlugin');
    return this.executeRequest(request).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.result as JeedomPlugin[];
      })
    );
  }

  /**
   * Exécute la commande spécifiée
   * @param cmdId int id : id d’une commande ou tableau d’id si vous voulez executer plusieurs commandes d’un coup
   * @param options [options] Liste des options de la commande (dépend du type et du sous-type de la commande)
   * @returns ?
   */
  executeCommand(cmdId: string, options: any = {}): Observable<any> {
    const request = this.createRequest('cmd::execCmd', {
      id: cmdId,
      ...options,
    });
    return this.executeRequest(request).pipe(
      tap((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
      }),
      tap((response) => response.result)
    );
  }

  /**
   * Retourne l’historique de la commande (ne marche que sur les commandes de type info et historisées)
   * @param cmdId 
   * @param startTime  : date de début de l’historique
   * @param endTime  : date de fin de l’historique
   * @returns ?
   */
  getCommandHistory(
    cmdId: string,
    startTime?: string,
    endTime?: string
  ): Observable<any> {
    const params: any = { id: cmdId };
    if (startTime) params.startTime = startTime;
    if (endTime) params.endTime = endTime;

    const request = this.createRequest('cmd::getHistory', params);
    return this.executeRequest(request).pipe(
      tap((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
      }),
      tap((response) => response.result)
    );
  }
}
