import { AppDispatch } from '../../app/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../components/axiosApi';
import { Post, PostMutation } from '../../types';

export const createPost = createAsyncThunk<void, PostMutation>(
  'posts/create',
  async (postData) => {
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);

    if (postData.image) {
      formData.append('image', postData.image);
    }

    await axiosApi.post('/posts', formData);
  }
);

export const fetchPosts = createAsyncThunk<Post[], undefined, { dispatch: AppDispatch }>(
  'posts/fetchAll',
  async () => {
    const postsResponse = await axiosApi.get<Post[]>('/posts');
    return postsResponse.data;
  }
);

export const fetchOnePost = createAsyncThunk<PostMutation, string>(
  'posts/fetchOne',
  async (postId) => {
    const response = await axiosApi.get<PostMutation | null>(`/posts/${postId}.json`);
    const post = response.data;

    if (post === null) {
      throw new Error('Not found');
    }
    return post;
  }
);

export const deletePost = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'posts/delete',
  async (postId, thunkAPI) => {
    await axiosApi.delete(`/posts/${postId}.json`);
    await thunkAPI.dispatch(fetchPosts());
  }
);




