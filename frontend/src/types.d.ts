export interface Post {
  id: string;
  title: string;
  content: string;
  image: string | null;
  datetime: string;
}

export interface PostMutation {
  title: string;
  content: string;
  image: File | null;
}
