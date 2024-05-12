import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from './../../../models/blogs';
import { Subject, from, take, takeUntil } from 'rxjs';
import { Stores } from 'src/app/stores/stores/store';
import { Store } from '@ngrx/store';
import { BlogAction } from 'src/app/stores/actions/blog.action';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit, OnDestroy {
  data: Blog[] = [];
  onDestroy = new Subject<void>();
  constructor(
    private blogService: BlogService,
    private store: Store<Stores['blogs']>
  ) {}
  ngOnDestroy(): void {
    this.onDestroy.next();
  }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService
      .getBlogs()
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (data) => {
          this.data = data;
        },
      });
  }
  addFavorite(blog: Blog) {
    this.store.dispatch(BlogAction.addBlogs({ blog }));
    alert('eklendi');
  }
}
