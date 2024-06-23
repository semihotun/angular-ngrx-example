import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Word } from 'src/app/models/word';
import { WordAction } from 'src/app/stores/actions/blog.action';
import { Stores } from 'src/app/stores/stores/store';
@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit, OnDestroy {
  words$: Word[] = [];
  onDestroy = new Subject<void>();
  constructor(private store: Store<Stores['words']>) {
    store
      .select('words')
      .pipe(takeUntil(this.onDestroy))
      .subscribe((data) => (this.words$ = data));
  }
  ngOnDestroy(): void {
    this.onDestroy.next();
  }
  ngOnInit() {}
  removeFavorite(word: Word) {
    this.store.dispatch(WordAction.removeWord({ word }));
    alert('Silindi');
  }
}
