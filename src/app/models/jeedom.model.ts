export interface JeedomConfig {
  apiUrl: string;
  apiKey: string;
}

export interface JeedomApiRequest {
  jsonrpc: string;
  id: string;
  method: string;
  params: any;
}

export interface JeedomApiResponse {
  jsonrpc: string;
  id: string;
  result?: any;
  error?: {
    code: number;
    message: string;
  };
}

export interface JeedomDevice {
  id: string;
  name: string;
  type: string;
  eqType_name: string;
  isVisible: boolean;
  isEnable: boolean;
  configuration: any;
  cmds: JeedomCommand[];
}

export interface JeedomCommand {
  id: string;
  name: string;
  type: string;
  subType: string;
  eqLogic_id: string;
  isVisible: boolean;
  isHistorized: boolean;
  value?: any;
  unit?: string;
}

export interface JeedomRoom {
  id: string;
  name: string;
  isVisible: boolean;
}

export interface JeedomPlugin {
  id: string;
  name: string;
  description: string;
  author: string;
  version: string;
  isActive: boolean;
}