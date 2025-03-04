import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeedomDevice, JeedomCommand } from '../../models/jeedom.model';
import { JeedomApiService } from '../../services/jeedom-api.service';

@Component({
  selector: 'app-device-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="device-card">
      <h3>{{ device.name }}</h3>
      <p>Type: {{ device.eqType_name }}</p>
      
      <div *ngIf="isLoading" class="loading-spinner"></div>
      
      <div *ngIf="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      
      <div *ngFor="let cmd of getInfoCommands()">
        <div *ngIf="cmd.isVisible">
          <strong>{{ cmd.name }}:</strong> {{ cmd.value }} {{ cmd.unit }}
        </div>
      </div>
      
      <div *ngIf="getActionCommands().length > 0">
        <hr>
        <div *ngFor="let cmd of getActionCommands()">
          <button 
            *ngIf="cmd.isVisible" 
            class="btn" 
            (click)="executeCommand(cmd)"
            [disabled]="isExecuting"
          >
            {{ cmd.name }}
          </button>
        </div>
      </div>
    </div>
  `
})
export class DeviceCardComponent {
  @Input() device!: JeedomDevice;
  @Output() refresh = new EventEmitter<void>();
  
  isLoading = false;
  isExecuting = false;
  errorMessage = '';

  constructor(private jeedomApiService: JeedomApiService) {}

  getInfoCommands(): JeedomCommand[] {
    return this.device.cmds.filter(cmd => cmd.type === 'info');
  }

  getActionCommands(): JeedomCommand[] {
    return this.device.cmds.filter(cmd => cmd.type === 'action');
  }

  executeCommand(cmd: JeedomCommand): void {
    this.isExecuting = true;
    this.errorMessage = '';
    
    this.jeedomApiService.executeCommand(cmd.id).subscribe({
      next: () => {
        this.isExecuting = false;
        // Rafraîchir les données après l'exécution de la commande
        setTimeout(() => this.refresh.emit(), 1000);
      },
      error: (error) => {
        this.isExecuting = false;
        this.errorMessage = `Erreur lors de l'exécution de la commande: ${error.message}`;
      }
    });
  }
}