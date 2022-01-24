import { PostsState } from './../posts/state/posts.state';
import { CounterState } from './../counter/state/counter.state';
import { counterReducer } from '../counter/state/counter.reducer';
import { postsReducer } from '../posts/state/posts.reducers';
export interface AppState {

    counter: CounterState;
    posts: PostsState;

}


export const appReducer = {
    counter: counterReducer,

    posts: postsReducer
}