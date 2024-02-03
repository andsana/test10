import {PostMutation} from '../../types';
import React, {useState} from 'react';
import {Grid, TextField} from '@mui/material';
import {LoadingButton} from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import FileInput from '../FileInput/FileInput';

const initialState: PostMutation = {
  title: '',
  content: '',
  image: null,
};

interface Props {
  onSubmit: (post: PostMutation) => void;
  isLoading?: boolean;
}

const PostForm: React.FC<Props> = ({onSubmit, isLoading = false}) => {
  const [post, setPost] = useState(initialState);

  const changePost = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (files) {
      setPost(prevState => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    onSubmit({
      ...post
    });
  };

  return (
    <form onSubmit={onFormSubmit} style={{maxWidth: '400px'}}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs>
          <TextField
            id="title" label="Title"
            name="title"
            value={post.title}
            onChange={changePost}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="post" label="Post"
            name="post"
            value={post.content}
            onChange={changePost}
          />
        </Grid>
        <Grid item xs>
          <FileInput
            onChange={fileInputChangeHandler}
            name="image"
            label="Product image"
          />
        </Grid>
        <Grid item xs>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon/>}
          >
            Create
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default PostForm;