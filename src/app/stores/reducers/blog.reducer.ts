import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/initialState';
import { WordAction } from '../actions/blog.action';

export const BlogReducer = createReducer(
  initialState.words,
  on(WordAction.addWord, (state, { word }) => [...state, word]),
  on(WordAction.removeWord, (state, { word }) =>
    state.filter((x) => x.id !== word.id)
  )
);
