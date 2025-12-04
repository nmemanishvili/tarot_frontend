import { Component, NgModule, signal } from '@angular/core';
import { TarotService } from '../../services/tarot.service';
import { Card } from '../../models/card.model';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../home.component/home.component";
import { HeaderComponent } from '../header.component/header.component';

@Component({
  selector: 'app-tarot',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './tarot.component.html',
  styleUrl: './tarot.component.css',
})
export class TarotComponent {
 cards: Card [] = [];
 maxCards: number = 1;
  

  constructor(private tarotService: TarotService) {}

  loadRandomCard() {
    if (this.cards.length >= this.maxCards){
      console.log("empty return", this.maxCards);
      return;
    }
    this.tarotService.getRandomCard().subscribe(card=> {

        if(card.more_card === 1){
          this.maxCards=2;
          console.log("Card 1 condition met: maxCards set to 3");
        }else {
          this.maxCards=1;
          console.log("maxcards is 1", card);
        }
      this.cards.push(card);  
      console.log("cards are added");

    })
  }


  
}
