// Ce fichier est généré automatiquement à partir de jeedomApiRpc.yaml
// Généré le : 2025-06-18T05:31:25.004Z
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
  JeeObjectAllResponse,
  JeeObjectByIdResponse,
  EqLogicAllResponse,
  EqLogicByIdResponse,
  EqLogicByObjectIdResponse,
  EqLogicByTypeResponse,
  EqLogicByTypeAndIdResponse,
  CmdByIdResponse,
  CmdByEqLogicIdResponse,
  CmdAllResponse,
  CmdExecCmdResponse,
  CmdGetStatistiqueResponse,
  CmdSaveResponse,
  ScenarioByIdResponse,
  ScenarioAllResponse,
  UpdateCheckUpdateResponses,
  LogGetResponse,
  LogListResponse,
  UserAllResponses,
  UpdateAllResponses,
  PluginListPluginResponses,
} from '../angular-client';

@Injectable({ providedIn: 'root' })
export class JeedomApiWrapperService {
  constructor(private rpc: JsonRpcService) {}

  // Méthodes générées automatiquement à partir des schémas Jeedom API

  // Chaque méthode correspond à un schéma dans jeedomApiRpc.yaml

// La méthode logGet retourne une liste de LogGetResponse
  logGet(params: LogGetParam): Observable<LogGetResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogGet, params);
  }

// La méthode logAdd n'a pas de réponse définie, elle retourne 'any'
  logAdd(params: LogAddParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogAdd, params);
  }

// La méthode logList retourne une liste de LogListResponse
  logList(params: LogListParam): Observable<LogListResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogList, params);
  }

// La méthode logEmpty n'a pas de réponse définie, elle retourne 'any'
  logEmpty(params: LogEmptyParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogEmpty, params);
  }

// La méthode logRemove n'a pas de réponse définie, elle retourne 'any'
  logRemove(params: LogRemoveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.LogRemove, params);
  }

// La méthode datastoreByTypeLinkIdKey n'a pas de réponse définie, elle retourne 'any'
  datastoreByTypeLinkIdKey(params: DatastoreByTypeLinkIdKeyParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.DatastoreByTypeLinkIdKey, params);
  }

// La méthode datastoreSave n'a pas de réponse définie, elle retourne 'any'
  datastoreSave(params: DatastoreSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.DatastoreSave, params);
  }

// La méthode interactTryToReply n'a pas de réponse définie, elle retourne 'any'
  interactTryToReply(params: InteractTryToReplyParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.InteractTryToReply, params);
  }

// La méthode interactQueryAll n'a pas de réponse définie, elle retourne 'any'
  interactQueryAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.InteractQueryAll);
  }

// La méthode cmdExecCmd retourne une liste de CmdExecCmdResponse
  cmdExecCmd(params: CmdExecCmdParam): Observable<CmdExecCmdResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdExecCmd, params);
  }

// La méthode cmdById retourne un objet de type CmdByIdResponse
  cmdById(params: CmdByIdParam): Observable<CmdByIdResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdById, params);
  }

// La méthode cmdByEqLogicId retourne une liste de CmdByEqLogicIdResponse
  cmdByEqLogicId(params: CmdByEqLogicIdParam): Observable<CmdByEqLogicIdResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdByEqLogicId, params);
  }

// La méthode cmdGetStatistique retourne un objet de type CmdGetStatistiqueResponse
  cmdGetStatistique(params: CmdGetStatistiqueParam): Observable<CmdGetStatistiqueResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdGetStatistique, params);
  }

// La méthode cmdEvent n'a pas de réponse définie, elle retourne 'any'
  cmdEvent(params: CmdEventParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdEvent, params);
  }

// La méthode cmdSave retourne un objet de type CmdSaveResponse
  cmdSave(params: CmdSaveParam): Observable<CmdSaveResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.CmdSave, params);
  }

// La méthode timelineAll n'a pas de réponse définie, elle retourne 'any'
  timelineAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.TimelineAll);
  }

// La méthode timelineListFolder n'a pas de réponse définie, elle retourne 'any'
  timelineListFolder(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.TimelineListFolder);
  }

// La méthode timelineByFolder n'a pas de réponse définie, elle retourne 'any'
  timelineByFolder(params: TimelineByFolderParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.TimelineByFolder, params);
  }

// La méthode userAll n'a pas de réponse définie, elle retourne 'any'
  userAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UserAll);
  }

// La méthode userSave n'a pas de réponse définie, elle retourne 'any'
  userSave(params: UserSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UserSave, params);
  }

// La méthode pluginListPlugin n'a pas de réponse définie, elle retourne 'any'
  pluginListPlugin(params: PluginListPluginParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginListPlugin, params);
  }

// La méthode pluginInstall n'a pas de réponse définie, elle retourne 'any'
  pluginInstall(params: PluginInstallParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginInstall, params);
  }

// La méthode pluginRemove n'a pas de réponse définie, elle retourne 'any'
  pluginRemove(params: PluginRemoveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginRemove, params);
  }

// La méthode pluginDependancyInfo n'a pas de réponse définie, elle retourne 'any'
  pluginDependancyInfo(params: PluginDependancyInfoParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDependancyInfo, params);
  }

// La méthode pluginDependancyInstall n'a pas de réponse définie, elle retourne 'any'
  pluginDependancyInstall(params: PluginDependancyInstallParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDependancyInstall, params);
  }

// La méthode pluginDeamonInfo n'a pas de réponse définie, elle retourne 'any'
  pluginDeamonInfo(params: PluginDeamonInfoParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDeamonInfo, params);
  }

// La méthode pluginDeamonStart n'a pas de réponse définie, elle retourne 'any'
  pluginDeamonStart(params: PluginDeamonStartParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDeamonStart, params);
  }

// La méthode pluginDeamonStop n'a pas de réponse définie, elle retourne 'any'
  pluginDeamonStop(params: PluginDeamonStopParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDeamonStop, params);
  }

// La méthode pluginDeamonChangeAutoMode n'a pas de réponse définie, elle retourne 'any'
  pluginDeamonChangeAutoMode(params: PluginDeamonChangeAutoModeParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.PluginDeamonChangeAutoMode, params);
  }

// La méthode updateAll n'a pas de réponse définie, elle retourne 'any'
  updateAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UpdateAll);
  }

// La méthode updateCheckUpdate n'a pas de réponse définie, elle retourne 'any'
  updateCheckUpdate(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UpdateCheckUpdate);
  }

// La méthode updateUpdate n'a pas de réponse définie, elle retourne 'any'
  updateUpdate(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UpdateUpdate);
  }

// La méthode updateDoUpdate n'a pas de réponse définie, elle retourne 'any'
  updateDoUpdate(params: UpdateDoUpdateParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.UpdateDoUpdate, params);
  }

// La méthode messageAll n'a pas de réponse définie, elle retourne 'any'
  messageAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.MessageAll);
  }

// La méthode messageAdd n'a pas de réponse définie, elle retourne 'any'
  messageAdd(params: MessageAddParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.MessageAdd, params);
  }

// La méthode messageRemoveAll n'a pas de réponse définie, elle retourne 'any'
  messageRemoveAll(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.MessageRemoveAll);
  }

// La méthode jeedomHalt n'a pas de réponse définie, elle retourne 'any'
  jeedomHalt(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomHalt);
  }

// La méthode jeedomReboot n'a pas de réponse définie, elle retourne 'any'
  jeedomReboot(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomReboot);
  }

// La méthode jeedomIsOk n'a pas de réponse définie, elle retourne 'any'
  jeedomIsOk(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomIsOk);
  }

// La méthode jeedomUpdate n'a pas de réponse définie, elle retourne 'any'
  jeedomUpdate(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomUpdate);
  }

// La méthode jeedomBackup n'a pas de réponse définie, elle retourne 'any'
  jeedomBackup(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomBackup);
  }

// La méthode jeedomGetUsbMapping n'a pas de réponse définie, elle retourne 'any'
  jeedomGetUsbMapping(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeedomGetUsbMapping);
  }

// La méthode eventChanges n'a pas de réponse définie, elle retourne 'any'
  eventChanges(params: EventChangesParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EventChanges, params);
  }

// La méthode summaryGlobal n'a pas de réponse définie, elle retourne 'any'
  summaryGlobal(params: SummaryGlobalParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.SummaryGlobal, params);
  }

// La méthode summaryById n'a pas de réponse définie, elle retourne 'any'
  summaryById(params: SummaryByIdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.SummaryById, params);
  }

// La méthode eqLogicAll retourne une liste de EqLogicAllResponse
  eqLogicAll(): Observable<EqLogicAllResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicAll);
  }

// La méthode eqLogicFullById n'a pas de réponse définie, elle retourne 'any'
  eqLogicFullById(params: EqLogicFullByIdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicFullById, params);
  }

// La méthode eqLogicById retourne un objet de type EqLogicByIdResponse
  eqLogicById(params: EqLogicByIdParam): Observable<EqLogicByIdResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicById, params);
  }

// La méthode eqLogicByType retourne une liste de EqLogicByTypeResponse
  eqLogicByType(params: EqLogicByTypeParam): Observable<EqLogicByTypeResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicByType, params);
  }

// La méthode eqLogicByObjectId retourne une liste de EqLogicByObjectIdResponse
  eqLogicByObjectId(params: EqLogicByObjectIdParam): Observable<EqLogicByObjectIdResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicByObjectId, params);
  }

// La méthode eqLogicByTypeAndId retourne une liste de EqLogicByTypeAndIdResponse
  eqLogicByTypeAndId(params: EqLogicByTypeAndIdParam): Observable<EqLogicByTypeAndIdResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicByTypeAndId, params);
  }

// La méthode eqLogicSave n'a pas de réponse définie, elle retourne 'any'
  eqLogicSave(params: EqLogicSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.EqLogicSave, params);
  }

// La méthode jeeObjectAll retourne une liste de JeeObjectAllResponse
  jeeObjectAll(): Observable<JeeObjectAllResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectAll);
  }

// La méthode jeeObjectFull n'a pas de réponse définie, elle retourne 'any'
  jeeObjectFull(): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectFull);
  }

// La méthode jeeObjectById retourne un objet de type JeeObjectByIdResponse
  jeeObjectById(params: JeeObjectByIdParam): Observable<JeeObjectByIdResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectById, params);
  }

// La méthode jeeObjectFullById n'a pas de réponse définie, elle retourne 'any'
  jeeObjectFullById(params: JeeObjectFullByIdParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectFullById, params);
  }

// La méthode jeeObjectSave n'a pas de réponse définie, elle retourne 'any'
  jeeObjectSave(params: JeeObjectSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.JeeObjectSave, params);
  }

// La méthode scenarioAll retourne une liste de ScenarioAllResponse
  scenarioAll(): Observable<ScenarioAllResponse[]> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioAll);
  }

// La méthode scenarioById retourne un objet de type ScenarioByIdResponse
  scenarioById(params: ScenarioByIdParam): Observable<ScenarioByIdResponse> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioById, params);
  }

// La méthode scenarioExport n'a pas de réponse définie, elle retourne 'any'
  scenarioExport(params: ScenarioExportParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioExport, params);
  }

// La méthode scenarioImport n'a pas de réponse définie, elle retourne 'any'
  scenarioImport(params: ScenarioImportParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioImport, params);
  }

// La méthode scenarioChangeState n'a pas de réponse définie, elle retourne 'any'
  scenarioChangeState(params: ScenarioChangeStateParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ScenarioChangeState, params);
  }

// La méthode configByKey n'a pas de réponse définie, elle retourne 'any'
  configByKey(params: ConfigByKeyParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ConfigByKey, params);
  }

// La méthode configSave n'a pas de réponse définie, elle retourne 'any'
  configSave(params: ConfigSaveParam): Observable<any> {
    return this.rpc.call(JsonRpcRequest.MethodEnum.ConfigSave, params);
  }

}