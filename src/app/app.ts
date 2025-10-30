import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list";
import { ComponentLove } from "./component-love/component-love";
import { Header } from './header/header';
import { UserFormComponent } from './user-form/user-form';



import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarotService } from './tarot.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="padding:1rem; max-width:700px; margin:auto">
      <h1>Tarot Drawer</h1>

      <div>
        <label>ბარათების რაოდენობა:
          <input type="number" [(ngModel)]="count" min="1" max="10">
        </label>
        <button (click)="draw()">Draw</button>
      </div>

      <div *ngIf="loading">Loading…</div>

      <ul *ngIf="cards?.length">
        <li *ngFor="let c of cards">
          <strong>{{c.name}}</strong> — {{c.meaning}}
        </li>
      </ul>

      <p *ngIf="error" style="color:crimson">{{error}}</p>
    </div>
  `
})
export class App {
  count = 3;
  cards: any[] = [];
  loading = false;
  error = '';

  constructor(private tarot: TarotService) {}

  draw() {
    this.error = '';
    this.loading = true;
    this.tarot.draw({ count: this.count }).subscribe({
      next: (res: any) => { this.cards = res.cards || []; this.loading = false; },
      error: (err) => { this.error = err?.message || 'Request failed'; this.loading = false; }
    });
  }
}
