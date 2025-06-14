import { Injectable } from '@angular/core';
import { JsonRpcService } from './jeedom-rpc.service';
import { Observable } from 'rxjs';
import {
  JsonRpcRequest,
  JsonRpcResponse,
  LogGet,
  LogAdd,
  LogList,
  LogEmpty,
  LogRemove,
  DatastoreByTypeLinkIdKey,
  DatastoreSave,
  InteractTryToReply,
  CmdExecCmd,
  CmdById,
  CmdByEqLogicId,
  CmdGetStatistique,
  CmdEvent,
  CmdSave,
  TimelineByFolder,
  UserSave,
  PluginListPlugin,
  PluginInstall,
  PluginRemove,
  PluginDependancyInfo,
  PluginDependancyInstall,
  PluginDeamonInfo,
  PluginDeamonStart,
  PluginDeamonStop,
  PluginDeamonChangeAutoMode,
  UpdateDoUpdate,
  MessageAdd,
  EventChanges,
  SummaryGlobal,
  SummaryById,
  EqLogicFullById,
  EqLogicById,
  EqLogicByType,
  EqLogicByObjectId,
  EqLogicByTypeAndId,
  EqLogicSave,
  JeeObjectById,
  JeeObjectFullById,
  JeeObjectSave,
  ScenarioById,
  ScenarioExport,
  ScenarioImport,
  ScenarioChangeState,
  ConfigByKey,
  ConfigSave,
} from '../angular-client';

@Injectable({ providedIn: 'root' })
export class JeedomApiWrapperService {
  constructor(private rpc: JsonRpcService) {}

  jsonRpcRequest(params: JsonRpcRequest): Observable<any> {
    return this.rpc.call('Json::Rpc::Request', params);
  }

  jsonRpcResponse(params: JsonRpcResponse): Observable<any> {
    return this.rpc.call('Json::Rpc::Response', params);
  }

  logGet(params: LogGet): Observable<any> {
    return this.rpc.call('Log::Get', params);
  }

  logAdd(params: LogAdd): Observable<any> {
    return this.rpc.call('Log::Add', params);
  }

  logList(params: LogList): Observable<any> {
    return this.rpc.call('Log::List', params);
  }

  logEmpty(params: LogEmpty): Observable<any> {
    return this.rpc.call('Log::Empty', params);
  }

  logRemove(params: LogRemove): Observable<any> {
    return this.rpc.call('Log::Remove', params);
  }

  datastoreByTypeLinkIdKey(params: DatastoreByTypeLinkIdKey): Observable<any> {
    return this.rpc.call('Datastore::By::Type::Link::Id::Key', params);
  }

  datastoreSave(params: DatastoreSave): Observable<any> {
    return this.rpc.call('Datastore::Save', params);
  }

  interactTryToReply(params: InteractTryToReply): Observable<any> {
    return this.rpc.call('Interact::Try::To::Reply', params);
  }

  cmdExecCmd(params: CmdExecCmd): Observable<any> {
    return this.rpc.call('Cmd::Exec::Cmd', params);
  }

  cmdById(params: CmdById): Observable<any> {
    return this.rpc.call('Cmd::By::Id', params);
  }

  cmdByEqLogicId(params: CmdByEqLogicId): Observable<any> {
    return this.rpc.call('Cmd::By::Eq::Logic::Id', params);
  }

  cmdGetStatistique(params: CmdGetStatistique): Observable<any> {
    return this.rpc.call('Cmd::Get::Statistique', params);
  }

  cmdEvent(params: CmdEvent): Observable<any> {
    return this.rpc.call('Cmd::Event', params);
  }

  cmdSave(params: CmdSave): Observable<any> {
    return this.rpc.call('Cmd::Save', params);
  }

  timelineByFolder(params: TimelineByFolder): Observable<any> {
    return this.rpc.call('Timeline::By::Folder', params);
  }

  userSave(params: UserSave): Observable<any> {
    return this.rpc.call('User::Save', params);
  }

  pluginListPlugin(params: PluginListPlugin): Observable<any> {
    return this.rpc.call('Plugin::List::Plugin', params);
  }

  pluginInstall(params: PluginInstall): Observable<any> {
    return this.rpc.call('Plugin::Install', params);
  }

  pluginRemove(params: PluginRemove): Observable<any> {
    return this.rpc.call('Plugin::Remove', params);
  }

  pluginDependancyInfo(params: PluginDependancyInfo): Observable<any> {
    return this.rpc.call('Plugin::Dependancy::Info', params);
  }

  pluginDependancyInstall(params: PluginDependancyInstall): Observable<any> {
    return this.rpc.call('Plugin::Dependancy::Install', params);
  }

  pluginDeamonInfo(params: PluginDeamonInfo): Observable<any> {
    return this.rpc.call('Plugin::Deamon::Info', params);
  }

  pluginDeamonStart(params: PluginDeamonStart): Observable<any> {
    return this.rpc.call('Plugin::Deamon::Start', params);
  }

  pluginDeamonStop(params: PluginDeamonStop): Observable<any> {
    return this.rpc.call('Plugin::Deamon::Stop', params);
  }

  pluginDeamonChangeAutoMode(params: PluginDeamonChangeAutoMode): Observable<any> {
    return this.rpc.call('Plugin::Deamon::Change::Auto::Mode', params);
  }

  updateDoUpdate(params: UpdateDoUpdate): Observable<any> {
    return this.rpc.call('Update::Do::Update', params);
  }

  messageAdd(params: MessageAdd): Observable<any> {
    return this.rpc.call('Message::Add', params);
  }

  eventChanges(params: EventChanges): Observable<any> {
    return this.rpc.call('Event::Changes', params);
  }

  summaryGlobal(params: SummaryGlobal): Observable<any> {
    return this.rpc.call('Summary::Global', params);
  }

  summaryById(params: SummaryById): Observable<any> {
    return this.rpc.call('Summary::By::Id', params);
  }

  eqLogicFullById(params: EqLogicFullById): Observable<any> {
    return this.rpc.call('Eq::Logic::Full::By::Id', params);
  }

  eqLogicById(params: EqLogicById): Observable<any> {
    return this.rpc.call('Eq::Logic::By::Id', params);
  }

  eqLogicByType(params: EqLogicByType): Observable<any> {
    return this.rpc.call('Eq::Logic::By::Type', params);
  }

  eqLogicByObjectId(params: EqLogicByObjectId): Observable<any> {
    return this.rpc.call('Eq::Logic::By::Object::Id', params);
  }

  eqLogicByTypeAndId(params: EqLogicByTypeAndId): Observable<any> {
    return this.rpc.call('Eq::Logic::By::Type::And::Id', params);
  }

  eqLogicSave(params: EqLogicSave): Observable<any> {
    return this.rpc.call('Eq::Logic::Save', params);
  }

  jeeObjectById(params: JeeObjectById): Observable<any> {
    return this.rpc.call('Jee::Object::By::Id', params);
  }

  jeeObjectFullById(params: JeeObjectFullById): Observable<any> {
    return this.rpc.call('Jee::Object::Full::By::Id', params);
  }

  jeeObjectSave(params: JeeObjectSave): Observable<any> {
    return this.rpc.call('Jee::Object::Save', params);
  }

  scenarioById(params: ScenarioById): Observable<any> {
    return this.rpc.call('Scenario::By::Id', params);
  }

  scenarioExport(params: ScenarioExport): Observable<any> {
    return this.rpc.call('Scenario::Export', params);
  }

  scenarioImport(params: ScenarioImport): Observable<any> {
    return this.rpc.call('Scenario::Import', params);
  }

  scenarioChangeState(params: ScenarioChangeState): Observable<any> {
    return this.rpc.call('Scenario::Change::State', params);
  }

  configByKey(params: ConfigByKey): Observable<any> {
    return this.rpc.call('Config::By::Key', params);
  }

  configSave(params: ConfigSave): Observable<any> {
    return this.rpc.call('Config::Save', params);
  }

}