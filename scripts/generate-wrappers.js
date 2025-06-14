const fs = require('fs');
const yaml = require('yaml');

const file = fs.readFileSync('../public/api/jeedomApiRpc.yaml', 'utf8');
const doc = yaml.parse(file);

// Sortir les schémas
const schemas = doc.components?.schemas || {};

for (const [schemaName, schema] of Object.entries(schemas)) {
  if (!schema.properties || Object.keys(schema.properties).length === 0) {
    delete schemas[schemaName]; // Supprimer les schémas vides
  }
}

const lines = [];
lines.push(`import { Injectable } from '@angular/core';`);
lines.push(`import { JsonRpcService } from './json-rpc.service';`);
lines.push(`import { Observable } from 'rxjs';`);
lines.push(`import {`);
Object.keys(schemas).forEach(schema => {
  lines.push(`  ${schema},`);
});
lines.push(`} from '../angular-client';`);
lines.push(`\n@Injectable({ providedIn: 'root' })`);
lines.push(`export class JeedomApiWrapperService {`);
lines.push(`  constructor(private rpc: JsonRpcService) {}\n`);

for (const schemaName of Object.keys(schemas)) {
  const methodName = schemaName.replace(/([A-Z])/g, (m, p1, i) => (i === 0 ? p1.toLowerCase() : p1));
  const method = schemaName
    .replace(/([a-z])([A-Z])/g, '$1::$2') // EqLogicById → EqLogic::ById
    .replace(/([A-Z])([A-Z][a-z])/g, '$1::$2')
    .replace(/([a-z])([A-Z])/g, '$1::$2');

  lines.push(`  ${methodName}(params: ${schemaName}): Observable<any> {`);
  lines.push(`    return this.rpc.call('${method}', params);`);
  lines.push(`  }\n`);
}

lines.push(`}`);

fs.writeFileSync('../src/app/services/jeedom-api-wrapper.service.ts', lines.join('\n'), 'utf8');
console.log('✅ Fichier jeedom-api-wrapper.service.ts généré avec succès.');
