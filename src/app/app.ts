import { Component, NgModule, signal } from '@angular/core';
import { TarotService } from './services/tarot.service';
import { TarotComponent } from './tarot.component/tarot.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { provideHttpClient, withFetch } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterOutlet,
    TarotComponent,
  ],

  templateUrl: `./app.html`
})
export class App {
  constructor( private http: HttpClient ) {}
  
}
