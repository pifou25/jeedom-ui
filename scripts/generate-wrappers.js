const fs = require('fs');
const yaml = require('yaml');

const file = fs.readFileSync('../public/api/jeedomApiRpc.yaml', 'utf8');
const doc = yaml.parse(file);

// Sortir les schémas
const schemas = doc.components?.schemas || {};
const schemasResponse = {};

for (const [schemaName, schema] of Object.entries(schemas)) {
  // si le nom de schéma ne termine pas par "param" on l'ajoute à la liste des schémas Response et inner
  if (!schemaName.endsWith('Param')) {
    console.log(`Ajout du schéma ${schemaName} à la liste des schémas Response`);
    schemasResponse[schemaName] = schema;
    delete schemas[schemaName]; // Supprimer les schémas vides
  }
}

const lines = [];
// ajouter un commentaire disant que ce fichier est généré
lines.push(`// Ce fichier est généré automatiquement à partir de jeedomApiRpc.yaml`);
// ajouter la date de génération
lines.push(`// Généré le : ${new Date().toISOString()}`);
lines.push(`import { Injectable } from '@angular/core';`);
lines.push(`import { JsonRpcService } from './jeedom-rpc.service';`);
lines.push(`import { Observable } from 'rxjs';`);
lines.push(`import {`);
// importer les schémas uniquement s'ils ont des propriétés
for (const [schemaName, schema] of Object.entries(schemas)) {
  if(schema.properties && Object.keys(schema.properties).length > 0) {
    lines.push(`  ${schemaName},`);
  }
}
// importer les schémas de réponse
for (const [schemaName, schema] of Object.entries(schemasResponse)) {
  if(schema.type === 'array' || (schema.properties && Object.keys(schema.properties).length > 0)) {
    lines.push(`  ${schemaName},`);
  }
}
lines.push(`} from '../angular-client';`);
lines.push(`\n@Injectable({ providedIn: 'root' })`);
lines.push(`export class JeedomApiWrapperService {`);
lines.push(`  constructor(private rpc: JsonRpcService) {}\n`);

// list of all JSON RPC methods
lines.push(`  // Méthodes générées automatiquement à partir des schémas Jeedom API\n`);
lines.push(`  // Chaque méthode correspond à un schéma dans jeedomApiRpc.yaml\n`);

// regex pour remplacer les noms de schémas avec des préfixes spécifiques
// Ex: EqLogicById → eqLogicById, EventList → eventList
// regex = /^(Config|Cmd|Datastore|EqLogic|Event|Interact|Jeedom|JeeObject|Log|Message|Plugin|Scenario|Summary|Timeline|Update|User)([A-Za-z]*)/;
for (const [schemaName, schema] of Object.entries(schemas)) {
  const methodName = schemaName.replace(/Param$/, '')
    .replace(/([A-Z])/g, (m, p1, i) => (i === 0 ? p1.toLowerCase() : p1));
  /*const method = schemaName.replace(/Param$/, '')
    .replace( regex, '$1::$2'); // EqLogicById → EqLogic::ById*/
    const methodEnum = 'JsonRpcRequest.MethodEnum.' + schemaName.replace(/Param$/, '');
    
  // vérifier si le schéma a des propriétés
  const paramFunction = (!schema.properties || Object.keys(schema.properties).length === 0);
  const paramFunctionInput = paramFunction ? '' : `params: ${schemaName}`;
  const paramFunctionOutput = paramFunction ? '' : ', params';

  // rechercher s'il existe une réponse correspondante
  const responseName = schemaName.replace(/Param$/, 'Response');

  // si la réponse est une liste, on ajoute '[]' à la fin du type
  if (schemasResponse[responseName] && schemasResponse[responseName].type === 'array') {
    lines.push(`// La méthode ${methodName} retourne une liste de ${responseName}`);
    response = `${responseName}[]`;
  } else if (schemasResponse[responseName] && schemasResponse[responseName].properties && Object.keys(schemasResponse[responseName].properties).length !== 0) {
    lines.push(`// La méthode ${methodName} retourne un objet de type ${responseName}`);
    response = responseName;
  } else {
    lines.push(`// La méthode ${methodName} n'a pas de réponse définie, elle retourne 'any'`);
    console.log(`ℹ️ Le schéma ${responseName} n'existe pas. La réponse de la méthode ${methodName} sera de type 'any'.`);
    response = 'any';
  }

  lines.push(`  ${methodName}(${paramFunctionInput}): Observable<${response}> {`);
  lines.push(`    return this.rpc.call(${methodEnum}${paramFunctionOutput});`);
  lines.push(`  }\n`);
}

lines.push(`}`);

fs.writeFileSync('../src/app/services/jeedom-api-wrapper.service.ts', lines.join('\n'), 'utf8');
console.log('✅ Fichier jeedom-api-wrapper.service.ts généré avec succès.');
