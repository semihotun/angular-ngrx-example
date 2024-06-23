import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Word } from '../models/word';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  http: HttpClient = inject(HttpClient);

  constructor() {}
  getWords(): Observable<Word[]> {
    const fakeWords: Word[] = [
      { id: '1', word: 'apple', translateWord: 'elma' },
      { id: '2', word: 'book', translateWord: 'kitap' },
      { id: '3', word: 'car', translateWord: 'araba' },
      { id: '4', word: 'dog', translateWord: 'köpek' },
      { id: '5', word: 'elephant', translateWord: 'fil' },
      { id: '6', word: 'flower', translateWord: 'çiçek' },
      { id: '7', word: 'guitar', translateWord: 'gitar' },
      { id: '8', word: 'house', translateWord: 'ev' },
      { id: '9', word: 'ice', translateWord: 'buz' },
      { id: '10', word: 'jungle', translateWord: 'orman' },
    ];
    return of(fakeWords);
  }
}
