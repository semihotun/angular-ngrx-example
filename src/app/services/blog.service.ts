import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Blog } from '../models/blogs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  http: HttpClient = inject(HttpClient);

  constructor() {}
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(environment.path);
  }
}
