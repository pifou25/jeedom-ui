import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DefaultService, JsonRpcRequest, JsonRpcResponse, JsonRpcRequestParams, EqLogicById } from '../angular-client';

@Injectable({
  providedIn: 'root',
})
export class JsonRpcService {
  constructor(private api: DefaultService) {}

  call<TParams, TResult = any>(
    method: string | JsonRpcRequest.MethodEnum,
    params: JsonRpcRequestParams = {},
    id: number = 1
  ): Observable<TResult> {
    const methodEnum = toMethodEnum(method);
    if (!methodEnum) {
      throw new Error(`Jeedom RPC API Méthode inconnue : ${method}`);
    }
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      id: id,
      method: methodEnum,
      params,
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

}

function toMethodEnum(value: string): JsonRpcRequest.MethodEnum | undefined {
  const found = Object.entries(JsonRpcRequest.MethodEnum)
    .find(([, v]) => v === value);
  return found ? (found[1] as JsonRpcRequest.MethodEnum) : undefined;
}
