import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { CarReducer } from './cars/car.reducer';
import { AppState } from './app.state';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), 
    provideStore<AppState>(
      {
        car: CarReducer
      }
    )
  ],
};
