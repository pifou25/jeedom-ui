import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { JeedomApiService } from '../services/jeedom-api.service';

export const authGuard = () => {
  const jeedomApiService = inject(JeedomApiService);
  const router = inject(Router);

  if (jeedomApiService.isConfigured()) {
    return true;
  }

  // Rediriger vers la page de configuration si non configuré
  return router.parseUrl('/config');
};