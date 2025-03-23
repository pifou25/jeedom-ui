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
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
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
        console.debug( this.rooms.length + " rooms loaded")

        // Puis charger les équipements
        this.jeedomApiService.getDevices().subscribe({
          next: (devices) => {
            this.devices = devices.filter(device => device.isEnable && device.isVisible);
            console.debug( this.devices.length + " devices loaded")
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