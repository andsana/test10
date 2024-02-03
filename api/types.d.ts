export interface Post {
    id: string;
    title: string;
    content: string;
    image: string | null;
    dateTime: string;
}

export type PostWithoutId = Omit<Post, 'id'>;
