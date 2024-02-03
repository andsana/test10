import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { fetchPosts } from '../../store/posts/postsThunks';
import React, { useEffect } from 'react';
import { selectFetchPostsLoading, selectPosts } from '../../store/posts/postsSlise';
import PostItem from '../../components/PostItem/PosItem';

const Home = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const postsLoading = useAppSelector(selectFetchPostsLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let postsArea: React.ReactNode = <CircularProgress/>;

  if (!postsLoading && posts) {
    postsArea = posts.map(post => (
      <PostItem
          id={post.id}
        key={post.id}
        title={post.title}
        content={post.content}
        image={post.image}
        dateTime={post.dateTime}
      />
    ));
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4">Posts</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" component={Link} to="/new-post">
            Add new post
          </Button>
        </Grid>
      </Grid>

      <Grid item container spacing={1}>
        {postsArea}
      </Grid>
    </Grid>
  );
};

export default Home;