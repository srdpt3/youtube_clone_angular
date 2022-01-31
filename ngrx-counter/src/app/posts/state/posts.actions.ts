import { createAction, props } from "@ngrx/store";
import { Post } from "../models/posts.model";


export const ADD_POST_ACTION = '[posts page] add post';
export const ADD_POST_SUCCESS = '[posts page] add post success';
export const UPDATE_POST_ACTION = '[posts page] update post';
export const UPDATE_POST_SUCCESS = '[posts page] update post success';
export const DELETE_POST_ACTION = '[posts page] delete post';
export const DELETE_POST_SUCCESS = '[posts page] delete post success';
export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());


export const addPostSuccess = createAction(
    ADD_POST_SUCCESS,
    props<{ post: Post }>()
);