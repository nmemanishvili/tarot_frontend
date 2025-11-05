import { Component, NgModule, signal } from '@angular/core';
import { UserFormComponent } from './user-form/user-form';
import { UserListComponent } from './user-list/user-list';
import { AlphabetComponent } from './alphabet.component/alphabet.component';
import { TarotService } from './tarot.service';
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
    // AlphabetComponent,
    // UserFormComponent,
    // UserListComponent
    
                
  ],

  templateUrl: `./app.html`
})
export class App {
  constructor( private http: HttpClient ) {}
  
}
