import { PostMutation, Post } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { createPost, deletePost, fetchPosts, fetchOnePost } from './postsThunks';
import { RootState } from '../../app/store';

interface PostsState {
  items: Post[];
  post: PostMutation | null;
  fetchPostsLoading: boolean;
  fetchOnePostLoading: boolean;
  createPostLoading: boolean;
  deletePostLoading: false | string;
}

const initialState: PostsState = {
  items: [],
  post: null,
  fetchPostsLoading: false,
  fetchOnePostLoading: false,
  createPostLoading: false,
  deletePostLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.fetchPostsLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, {payload: items}) => {
      state.fetchPostsLoading = false;
      state.items = items;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.fetchPostsLoading = false;
    });

    builder.addCase(fetchOnePost.pending, (state) => {
      state.fetchOnePostLoading = true;
    });
    builder.addCase(fetchOnePost.fulfilled, (state, {payload: post}) => {
      state.fetchOnePostLoading = false;
      state.post = post;
    });
    builder.addCase(fetchOnePost.rejected, (state) => {
      state.fetchOnePostLoading = false;
    });

    builder.addCase(createPost.pending, (state) => {
      state.createPostLoading = true;
    });
    builder.addCase(createPost.fulfilled, (state) => {
      state.createPostLoading = false;
    });
    builder.addCase(createPost.rejected, (state) => {
      state.createPostLoading = false;
    });

    builder.addCase(deletePost.pending, (state, {meta}) => {
      state.deletePostLoading = meta.arg;
    });
    builder.addCase(deletePost.fulfilled, (state) => {
      state.deletePostLoading = false;
    });
    builder.addCase(deletePost.rejected, (state) => {
      state.deletePostLoading = false;
    });
  }
});

export const postsReducer = postsSlice.reducer;
export const selectPosts = (state: RootState) => state.posts.items;
export const selectPost = (state: RootState) => state.posts.post;
export const selectFetchPostsLoading = (state: RootState) => state.posts.fetchPostsLoading;
export const selectFetchOnePostLoading = (state: RootState) => state.posts.fetchOnePostLoading;
export const selectCreatePostLoading = (state: RootState) => state.posts.createPostLoading;
export const selectDeletePostLoading = (state: RootState) => state.posts.deletePostLoading;