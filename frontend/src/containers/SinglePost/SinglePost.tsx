import { useParams } from 'react-router-dom';
import PostItem from '../../components/PostItem/PosItem';
import { useAppSelector } from '../../app/hook';
import { selectPosts } from '../../store/posts/postsSlise';

const SinglePost = () => {
  const {id} = useParams();
  const posts = useAppSelector(selectPosts);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <PostItem id={post.id} title={post.title} content={post.content} image={post.image} dateTime={post.dateTime}/>
  );
};

export default SinglePost;

