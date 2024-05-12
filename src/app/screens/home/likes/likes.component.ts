import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Blog } from 'src/app/models/blogs';
import { BlogAction } from 'src/app/stores/actions/blog.action';
import { Stores } from 'src/app/stores/stores/store';
@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnInit, OnDestroy {
  blogs$: Blog[] = [];
  onDestroy = new Subject<void>();
  constructor(private store: Store<Stores['blogs']>) {
    store
      .select('blogs')
      .pipe(takeUntil(this.onDestroy))
      .subscribe((data) => (this.blogs$ = data));
  }
  ngOnDestroy(): void {
    this.onDestroy.next();
  }
  ngOnInit() {}
  removeFavorite(blog: Blog) {
    this.store.dispatch(BlogAction.removeBlogs({ blog }));
    alert('Silindi');
  }
}
