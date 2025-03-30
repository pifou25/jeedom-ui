import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { JeedomDevice, JeedomCommand, JeedomRoom } from '../../models/jeedom.model';
import { DeviceCardComponent } from '../device-card/device-card.component';
import { JeedomApiService } from '../../services/jeedom-api.service';

@Component({
  selector: 'app-room',
  imports: [CommonModule, DeviceCardComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  @Input() room!: JeedomRoom;
  @Output() refresh = new EventEmitter<void>();

  isLoading = true;
  errorMessage = '';
  devices: JeedomDevice[] = [];

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

    // Charger les équipements de la pièce
    this.jeedomApiService.getFullRoom( this.room.id).subscribe({
      next: (room) => {

        if(!room.eqLogics || room.eqLogics.length == 0){
          this.errorMessage = 'Aucun device.'
        } else {
          this.devices = room.eqLogics.filter( device => device.isEnable && device.isVisible);
          console.debug( `${this.devices.length } devices loaded for ${this.room.name} (${this.room.id})`);
        }
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = `Erreur lors du chargement de ${this.room.name} (${this.room.id}): ${error.message}`;
        this.isLoading = false;
      }
    });
  }

  countInvisibleDevices(): number {
    return this.devices.filter( device => !device.isVisible).length;
  }

  getDevicesForRoom(): JeedomDevice[] {
    return this.devices;
  }

  refreshDevices() {
  }
}
