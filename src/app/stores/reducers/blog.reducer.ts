import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/initialState';
import { BlogAction } from '../actions/blog.action';

export const BlogReducer = createReducer(
  initialState.blogs,
  on(BlogAction.addBlogs, (state, { blog }) => [...state, blog]),
  on(BlogAction.removeBlogs, (state, { blog }) =>
    state.filter((x) => x.id !== blog.id)
  )
);
