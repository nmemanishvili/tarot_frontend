import { Card } from "./card.model";

export interface CardPosition {
    position: number;
    card?: Card;
    css: string;
}

export type CelticCrossPosition =
  | '1_situation'
  | '2_challenge'
  | '3_focus'
  | '4_recent_past'
  | '5_possibilities'
  | '6_near_future'
  | '7_power'
  | '8_environment'
  | '9_hopes_fears'
  | '10_outcome';

export type CelticCrossSpread = Record<CelticCrossPosition, Card>;


export interface SpreadCardConfig {
  key: keyof CelticCrossSpread;
  cssClass: string;
}
