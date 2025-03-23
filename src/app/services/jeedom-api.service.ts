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

  getDeviceById(id: string): Observable<JeedomDevice> {
    const request = this.createRequest('eqLogic::byId', { 'id': id });
    return this.executeRequest(request).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.result as JeedomDevice;
      })
    );
  }

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

  getCommandHistory(
    cmdId: string,
    startDate?: string,
    endDate?: string
  ): Observable<any> {
    const params: any = { id: cmdId };
    if (startDate) params.startDate = startDate;
    if (endDate) params.endDate = endDate;

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
