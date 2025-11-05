import { Component } from '@angular/core';
import { AlphabetService } from '../services/alphabet.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alphabet.component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alphabet.component.html',
  styleUrl: './alphabet.component.css',
})
export class AlphabetComponent {
  letter: string = '';
  value?: number;

  constructor(private alphabetService: AlphabetService) {}

  getValue(){
    if(!this.letter.trim()) return;

    this.alphabetService.getValueByLetter(this.letter).subscribe({
      next: (result) => this.value=result,
      error: (err) => console.error('შეცდომა:', err)
    });
  }

}
