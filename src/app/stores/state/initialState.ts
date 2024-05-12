import { Blog } from 'src/app/models/blogs';

export interface State {
  blogs: Blog[];
}
export const initialState: State = {
  blogs: [],
};
