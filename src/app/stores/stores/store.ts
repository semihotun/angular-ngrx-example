import { Blog } from 'src/app/models/blogs';

export interface Stores {
  blogs: { blogs: Blog[] };
}
