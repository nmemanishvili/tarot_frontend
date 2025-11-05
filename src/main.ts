import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { App } from './app/app';
import { provideHttpClient, withFetch } from '@angular/common/http';


bootstrapApplication(App, {
  providers: [
    provideHttpClient(withFetch()),          
    importProvidersFrom(FormsModule)
  ]
}).catch(err => console.error(err));



