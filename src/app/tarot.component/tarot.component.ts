import { Component, NgModule, signal } from '@angular/core';
import { TarotService } from '../services/tarot.service';
import { Card } from '../models/card.model';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tarot',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tarot.component.html',
  styleUrl: './tarot.component.css',
})
export class TarotComponent {
 cards: Card [] = [];
 maxCards=3;
  

  constructor(private tarotService: TarotService) {}


  loadRandomCard() {
    if (this.cards.length >= this.maxCards){
      return;
    }
    this.tarotService.getRandomCard().subscribe(card=> {
      console.log("card:", card)
      this.cards.push(card);
    
    })
  }
  
}
