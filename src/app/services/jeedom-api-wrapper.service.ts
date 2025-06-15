// Ce fichier est généré automatiquement à partir de jeedomApiRpc.yaml
// Généré le : 2025-06-15T16:08:37.352Z
import { Injectable } from '@angular/core';
import { JsonRpcService } from './jeedom-rpc.service';
import { Observable } from 'rxjs';
import {
  LogGetParam,
  LogAddParam,
  LogListParam,
  LogEmptyParam,
  LogRemoveParam,
  DatastoreByTypeLinkIdKeyParam,
  DatastoreSaveParam,
  InteractTryToReplyParam,
  CmdExecCmdParam,
  CmdByIdParam,
  CmdByEqLogicIdParam,
  CmdGetStatistiqueParam,
  CmdEventParam,
  CmdSaveParam,
  TimelineByFolderParam,
  UserSaveParam,
  PluginListPluginParam,
  PluginInstallParam,
  PluginRemoveParam,
  PluginDependancyInfoParam,
  PluginDependancyInstallParam,
  PluginDeamonInfoParam,
  PluginDeamonStartParam,
  PluginDeamonStopParam,
  PluginDeamonChangeAutoModeParam,
  UpdateDoUpdateParam,
  MessageAddParam,
  EventChangesParam,
  SummaryGlobalParam,
  SummaryByIdParam,
  EqLogicFullByIdParam,
  EqLogicByIdParam,
  EqLogicByTypeParam,
  EqLogicByObjectIdParam,
  EqLogicByTypeAndIdParam,
  EqLogicSaveParam,
  JeeObjectByIdParam,
  JeeObjectFullByIdParam,
  JeeObjectSaveParam,
  ScenarioByIdParam,
  ScenarioExportParam,
  ScenarioImportParam,
  ScenarioChangeStateParam,
  ConfigByKeyParam,
  ConfigSaveParam,
  JsonRpcRequest,
  JsonRpcResponse,
  EqLogicByIdResponse,
  EqLogicFullByIdResponse,
  CmdByIdResponse,
  CmdGetStatistiqueResponse,
  CmdSaveResponse,
  ScenarioByIdResponse,
} from '../angular-client';

@Injectable({ providedIn: 'root' })
export class JeedomApiWrapperService {
  constructor(private rpc: JsonRpcService) {}

  // Méthodes générées automatiquement à partir des schémas Jeedom API

  // Chaque méthode correspond à un schéma dans jeedomApiRpc.yaml

  logGet(params: LogGetParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogGet, params);
  }

  logAdd(params: LogAddParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogAdd, params);
  }

  logList(params: LogListParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogList, params);
  }

  logEmpty(params: LogEmptyParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogEmpty, params);
  }

  logRemove(params: LogRemoveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogRemove, params);
  }

  datastoreByTypeLinkIdKey(params: DatastoreByTypeLinkIdKeyParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.DatastoreByTypeLinkIdKey, params);
  }

  datastoreSave(params: DatastoreSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.DatastoreSave, params);
  }

  interactTryToReply(params: InteractTryToReplyParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.InteractTryToReply, params);
  }

  interactQueryAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.InteractQueryAll);
  }

  cmdExecCmd(params: CmdExecCmdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdExecCmd, params);
  }

  cmdById(params: CmdByIdParam): Observable<CmdByIdResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdById, params);
  }

  cmdByEqLogicId(params: CmdByEqLogicIdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdByEqLogicId, params);
  }

  cmdGetStatistique(params: CmdGetStatistiqueParam): Observable<CmdGetStatistiqueResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdGetStatistique, params);
  }

  cmdEvent(params: CmdEventParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdEvent, params);
  }

  cmdSave(params: CmdSaveParam): Observable<CmdSaveResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdSave, params);
  }

  timelineAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.TimelineAll);
  }

  timelineListFolder(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.TimelineListFolder);
  }

  timelineByFolder(params: TimelineByFolderParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.TimelineByFolder, params);
  }

  userAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UserAll);
  }

  userSave(params: UserSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UserSave, params);
  }

  pluginListPlugin(params: PluginListPluginParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginListPlugin, params);
  }

  pluginInstall(params: PluginInstallParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginInstall, params);
  }

  pluginRemove(params: PluginRemoveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginRemove, params);
  }

  pluginDependancyInfo(params: PluginDependancyInfoParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDependancyInfo, params);
  }

  pluginDependancyInstall(params: PluginDependancyInstallParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDependancyInstall, params);
  }

  pluginDeamonInfo(params: PluginDeamonInfoParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDeamonInfo, params);
  }

  pluginDeamonStart(params: PluginDeamonStartParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDeamonStart, params);
  }

  pluginDeamonStop(params: PluginDeamonStopParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDeamonStop, params);
  }

  pluginDeamonChangeAutoMode(params: PluginDeamonChangeAutoModeParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDeamonChangeAutoMode, params);
  }

  updateAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UpdateAll);
  }

  updateCheckUpdate(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UpdateCheckUpdate);
  }

  updateUpdate(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UpdateUpdate);
  }

  updateDoUpdate(params: UpdateDoUpdateParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UpdateDoUpdate, params);
  }

  messageAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.MessageAll);
  }

  messageAdd(params: MessageAddParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.MessageAdd, params);
  }

  messageRemoveAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.MessageRemoveAll);
  }

  jeedomHalt(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomHalt);
  }

  jeedomReboot(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomReboot);
  }

  jeedomIsOk(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomIsOk);
  }

  jeedomUpdate(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomUpdate);
  }

  jeedomBackup(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomBackup);
  }

  jeedomGetUsbMapping(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomGetUsbMapping);
  }

  eventChanges(params: EventChangesParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EventChanges, params);
  }

  summaryGlobal(params: SummaryGlobalParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.SummaryGlobal, params);
  }

  summaryById(params: SummaryByIdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.SummaryById, params);
  }

  eqLogicAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicAll);
  }

  eqLogicFullById(params: EqLogicFullByIdParam): Observable<EqLogicFullByIdResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicFullById, params);
  }

  eqLogicById(params: EqLogicByIdParam): Observable<EqLogicByIdResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicById, params);
  }

  eqLogicByType(params: EqLogicByTypeParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicByType, params);
  }

  eqLogicByObjectId(params: EqLogicByObjectIdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicByObjectId, params);
  }

  eqLogicByTypeAndId(params: EqLogicByTypeAndIdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicByTypeAndId, params);
  }

  eqLogicSave(params: EqLogicSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicSave, params);
  }

  jeeObjectAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectAll);
  }

  jeeObjectFull(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectFull);
  }

  jeeObjectById(params: JeeObjectByIdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectById, params);
  }

  jeeObjectFullById(params: JeeObjectFullByIdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectFullById, params);
  }

  jeeObjectSave(params: JeeObjectSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectSave, params);
  }

  scenarioAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioAll);
  }

  scenarioById(params: ScenarioByIdParam): Observable<ScenarioByIdResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioById, params);
  }

  scenarioExport(params: ScenarioExportParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioExport, params);
  }

  scenarioImport(params: ScenarioImportParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioImport, params);
  }

  scenarioChangeState(params: ScenarioChangeStateParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioChangeState, params);
  }

  configByKey(params: ConfigByKeyParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ConfigByKey, params);
  }

  configSave(params: ConfigSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ConfigSave, params);
  }

}