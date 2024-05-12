import { createActionGroup, props } from '@ngrx/store';
import { Blog } from 'src/app/models/blogs';

export const BlogAction = createActionGroup({
  source: 'Blogs',
  events: {
    'Add Blogs': props<{ blog: Blog }>(),
    'Remove Blogs': props<{ blog: Blog }>(),
  },
});
