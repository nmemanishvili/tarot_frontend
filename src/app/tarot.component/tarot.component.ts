import { Component, NgModule, signal } from '@angular/core';

import { TarotService } from '../tarot.service';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tarot.component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tarot.component.html',
  styleUrl: './tarot.component.css',
})
export class TarotComponent {
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
