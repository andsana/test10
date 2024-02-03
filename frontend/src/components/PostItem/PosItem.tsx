import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, styled } from '@mui/material';
import { apiURL } from '../../constants';

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

interface Props {
  title: string;
  content: string;
  image: string | null;
  datetime: string;
}

const PostItem: React.FC<Props> = ({title, content, image, datetime}) => {
  const cardImage = apiURL + '/' + image;

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
          <p>{datetime}</p>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PostItem;