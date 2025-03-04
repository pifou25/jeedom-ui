import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JeedomApiService } from '../../services/jeedom-api.service';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="header">
        <h1>Configuration de l'API Jeedom</h1>
      </div>
      
      <div class="card">
        <form [formGroup]="configForm" (ngSubmit)="saveConfig()">
          <div class="form-group">
            <label for="apiUrl">URL de l'API Jeedom</label>
            <input 
              type="text" 
              id="apiUrl" 
              formControlName="apiUrl" 
              class="form-control"
              placeholder="https://votre-jeedom.com/core/api/jeeApi.php"
            >
            <div *ngIf="configForm.get('apiUrl')?.invalid && configForm.get('apiUrl')?.touched" class="alert alert-danger">
              L'URL de l'API est requise
            </div>
          </div>
          
          <div class="form-group">
            <label for="apiKey">Clé API</label>
            <input 
              type="password" 
              id="apiKey" 
              formControlName="apiKey" 
              class="form-control"
              placeholder="Votre clé API Jeedom"
            >
            <div *ngIf="configForm.get('apiKey')?.invalid && configForm.get('apiKey')?.touched" class="alert alert-danger">
              La clé API est requise
            </div>
          </div>
          
          <div class="form-group">
            <button type="submit" class="btn" [disabled]="configForm.invalid || isLoading">
              <span *ngIf="isLoading" class="loading-spinner"></span>
              <span *ngIf="!isLoading">Tester et sauvegarder</span>
            </button>
          </div>
          
          <div *ngIf="errorMessage" class="alert alert-danger">
            {{ errorMessage }}
          </div>
        </form>
      </div>
    </div>
  `
})
export class ConfigComponent implements OnInit {
  configForm: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private jeedomApiService: JeedomApiService,
    private router: Router
  ) {
    this.configForm = this.fb.group({
      apiUrl: ['', [Validators.required]],
      apiKey: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Charger la configuration existante si disponible
    this.jeedomApiService.config$.subscribe(config => {
      if (config) {
        this.configForm.patchValue({
          apiUrl: config.apiUrl,
          apiKey: config.apiKey
        });
      }
    });
  }

  saveConfig(): void {
    if (this.configForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const config = {
      apiUrl: this.configForm.value.apiUrl,
      apiKey: this.configForm.value.apiKey
    };

    // Définir la configuration
    this.jeedomApiService.setConfig(config);

    // Tester la connexion
    this.jeedomApiService.testConnection().subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = `Erreur de connexion: ${error.message}`;
        this.jeedomApiService.clearConfig();
      }
    });
  }
}