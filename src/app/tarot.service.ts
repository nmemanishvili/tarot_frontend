import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TarotService {
  private base = '/api/tarot'; 

  constructor(private http: HttpClient) {}

  all(): Observable<any> {
    return this.http.get(this.base);
  }

  draw(payload: { count: number }): Observable<any> {
    return this.http.post(`${this.base}/draw`, payload);
  }

  get(id: number) {
    return this.http.get(`${this.base}/${id}`);
  }
}
