import { createActionGroup, props } from '@ngrx/store';
import { Word } from 'src/app/models/word';

export const WordAction = createActionGroup({
  source: 'Words',
  events: {
    'Add Word': props<{ word: Word }>(),
    'Remove Word': props<{ word: Word }>(),
  },
});
