import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { PostMutation } from '../../types';
import { Typography } from '@mui/material';
import { createPost } from '../../store/posts/postsThunks';
import { selectCreatePostLoading } from '../../store/posts/postsSlise';
import PostForm from '../../components/PostForm/PostForm';

const NewPost: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const creatingLoading = useAppSelector(selectCreatePostLoading);

  const onSubmit = async (postData: PostMutation) => {
    await dispatch(createPost(postData));
    void navigate('/');
  };

  return (
    <>
      <Typography variant="h4" sx={{mb: 2}}>New post</Typography>
      <PostForm onSubmit={onSubmit} isLoading={creatingLoading}/>
    </>
  );
};

export default NewPost;