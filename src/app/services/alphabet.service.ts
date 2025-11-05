import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AlphabetService {
    private apiUrl = 'http://localhost:8080/api/letter';

    constructor(private http: HttpClient) {}

    getValueByLetter(letter: string): Observable<number>{
        return this.http.get<number>(`${this.apiUrl}/${letter}`);

    }
}