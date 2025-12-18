import { Component, NgModule, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './components/header.component/header.component';
import { CelticCrossComponent } from './components/celtic-cross.component/celtic-cross.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home.component/home.component";
import { TarotComponent } from './components/tarot.component/tarot.component';
// import { provideHttpClient, withFetch } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    RouterOutlet,
    HomeComponent,
    CelticCrossComponent,
    TarotComponent
],

  templateUrl: `./app.html`
})
export class App {
  // constructor( private http: HttpClient ) {}
  
}
