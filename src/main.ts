// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(App, {
  providers: [
    provideHttpClient(),          
    importProvidersFrom(FormsModule)
  ]
}).catch(err => console.error(err));



