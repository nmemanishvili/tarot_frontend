import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

@Injectable({ 
  providedIn: 'root'
 })

export class TarotService {
  private readonly url = 'http://localhost:8080/api/tarot';

  constructor(private http: HttpClient) {}


  getRandomCard(): Observable<Card> {
    return this.http.get<Card>(`${this.url}/random`);
  }
  
  
}
