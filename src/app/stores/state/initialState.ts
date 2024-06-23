import { Word } from 'src/app/models/word';

export interface State {
  words: Word[];
}
export const initialState: State = {
  words: [],
};
