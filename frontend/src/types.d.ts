export interface Post {
  id: string;
  title: string;
  content: string;
  image: string | null;
  dateTime: string;
}

export interface PostMutation {
  title: string;
  content: string;
  image: File | null;
}
