import React from 'react';
import {Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, styled} from '@mui/material';
import {apiURL} from '../../constants';
import imageNotAvailable from '../../assets/images/no-image-available.png';
import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {selectPosts} from "../../store/posts/postsSlise";
import DeleteIcon from '@mui/icons-material/Delete';
import {deletePost} from "../../store/posts/postsThunks";


const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

interface Props {
  id: string;
  title: string;
  content: string;
  image: string | null;
  dateTime: string;
}

const PostItem: React.FC<Props> = ({id, title, content, image, dateTime}) => {

  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const post = posts.find(p => p.id === id);
  // const deletePostLoading = useAppSelector(selectDeletePostLoading);

  let cardImage = imageNotAvailable as string;

  const formattedDateTime = new Date(dateTime).toLocaleString();

  if (image) {
    cardImage = apiURL + '/' + image;
  }

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Card sx={{height: '100%'}}>
        <CardHeader title={title}/>
        <ImageCardMedia
          image={cardImage}
          title={title}
        />
        <CardContent>
          <strong>
            {content}
          </strong>
          <p>{formattedDateTime}</p>
        </CardContent>
        <CardActions>
          <IconButton component={Link} to={`/posts/${id}`}>
            <ArrowForwardIcon />
          </IconButton>
          <IconButton onClick={() => post && dispatch(deletePost(post.id))}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PostItem;