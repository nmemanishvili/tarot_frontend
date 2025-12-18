import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';
import { TarotService } from '../../services/tarot.service';
import { CelticCrossSpread, CelticCrossPosition} from '../../models/position.model';
import { SpreadCardConfig } from '../../models/position.model';


@Component({
  selector: 'app-celtic-cross',
  standalone: true,
  templateUrl: './celtic-cross.component.html',
  styleUrl: './celtic-cross.component.css',
})



export class CelticCrossComponent implements OnInit {

  spread: CelticCrossSpread | null = null;
  isLoading = false;

  crossCards: SpreadCardConfig[] = [
    { key: '3_focus', cssClass: 'card-3' },
    { key: '5_possibilities', cssClass: 'card-5' },
    { key: '6_near_future', cssClass: 'card-6' },
    { key: '4_recent_past', cssClass: 'card-4' },
  ];

  centerCards: SpreadCardConfig[] = [
    { key: '1_situation', cssClass: 'card-1-inner' },
    { key: '2_challenge', cssClass: 'card-2-inner' },
  ];

  staffCards: SpreadCardConfig[] = [
    { key: '10_outcome', cssClass: 'card-10' },
    { key: '9_hopes_fears', cssClass: 'card-9' },
    { key: '8_environment', cssClass: 'card-8' },
    { key: '7_power', cssClass: 'card-7' },
  ];

  labels: string[] = [
    'Situation',
    'Challenge',
    'Focus',
    'Recent Past',
    'Possibilities',
    'Near Future',
    'Power',
    'Environment',
    'Hopes',
    'Outcome',
  ];
  

  /** 🔑 პოზიციების სწორი რიგი — ერთ ადგილზე */
  private readonly POSITION_ORDER: CelticCrossPosition[] = [
    '1_situation',
    '2_challenge',
    '3_focus',
    '4_recent_past',
    '5_possibilities',
    '6_near_future',
    '7_power',
    '8_environment',
    '9_hopes_fears',
    '10_outcome',
  ];


  
  constructor(private tarotService: TarotService) {}

  ngOnInit(): void {
    this.drawCards();
  }

  drawCards(): void {
    this.isLoading = true;
    this.spread = null;

    this.tarotService.getRandomTen().subscribe({
      next: (cards: Card[]) => {
        if (cards.length !== this.POSITION_ORDER.length) {
          console.error('Expected 10 cards, got:', cards.length);
          this.isLoading = false;
          return;
        }

        this.spread = this.mapCardsToSpread(cards);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching cards:', err);
        this.isLoading = false;
      }
    });
  }

  /** 🧠 სუფთა mapping ლოგიკა */
  private mapCardsToSpread(cards: Card[]): CelticCrossSpread {
    return this.POSITION_ORDER.reduce((spread, position, index) => {
      spread[position] = cards[index];
      return spread;
    }, {} as CelticCrossSpread);
  }
}



