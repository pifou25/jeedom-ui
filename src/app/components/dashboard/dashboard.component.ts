import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JeedomApiService } from '../../services/jeedom-api.service';
import { JeedomDevice, JeedomRoom } from '../../models/jeedom.model';
import { DeviceCardComponent } from '../device-card/device-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DeviceCardComponent],
  template: `
    <div class="container">
      <div class="header">
        <h1>Tableau de bord Jeedom</h1>
        <button class="btn" (click)="logout()">Déconnexion</button>
      </div>
      
      <div *ngIf="isLoading" class="card">
        <div class="loading-spinner"></div> Chargement des données...
      </div>
      
      <div *ngIf="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      
      <div *ngIf="!isLoading && !errorMessage">
        <div *ngFor="let room of rooms">
          <div class="card" *ngIf="getDevicesForRoom(room.id).length > 0">
            <h2>{{ room.name }}</h2>
            <div class="device-grid">
              <app-device-card 
                *ngFor="let device of getDevicesForRoom(room.id)" 
                [device]="device"
                (refresh)="refreshDevices()"
              ></app-device-card>
            </div>
          </div>
        </div>
        
        <div class="card" *ngIf="getDevicesWithoutRoom().length > 0">
          <h2>Équipements sans pièce</h2>
          <div class="device-grid">
            <app-device-card 
              *ngFor="let device of getDevicesWithoutRoom()" 
              [device]="device"
              (refresh)="refreshDevices()"
            ></app-device-card>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  devices: JeedomDevice[] = [];
  rooms: JeedomRoom[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private jeedomApiService: JeedomApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.jeedomApiService.isConfigured()) {
      this.router.navigate(['/config']);
      return;
    }
    
    this.loadData();
  }

  loadData(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    // Charger les pièces
    this.jeedomApiService.getRooms().subscribe({
      next: (rooms) => {
        this.rooms = rooms;
        
        // Puis charger les équipements
        this.jeedomApiService.getDevices().subscribe({
          next: (devices) => {
            this.devices = devices.filter(device => device.isEnable && device.isVisible);
            this.isLoading = false;
          },
          error: (error) => {
            this.errorMessage = `Erreur lors du chargement des équipements: ${error.message}`;
            this.isLoading = false;
          }
        });
      },
      error: (error) => {
        this.errorMessage = `Erreur lors du chargement des pièces: ${error.message}`;
        this.isLoading = false;
      }
    });
  }

  getDevicesForRoom(roomId: string): JeedomDevice[] {
    return this.devices.filter(device => device.configuration?.object_id === roomId);
  }

  getDevicesWithoutRoom(): JeedomDevice[] {
    return this.devices.filter(device => !device.configuration?.object_id);
  }

  refreshDevices(): void {
    this.loadData();
  }

  logout(): void {
    this.jeedomApiService.clearConfig();
    this.router.navigate(['/config']);
  }
}