import { ImageUri, Post } from '@/types/domain';
import { axiosInstance } from './axios';

export type RequestCreatePost = Omit<Post, 'id'> & { imageUris: ImageUri[] };

export type ResponsePost = Post & { images: ImageUri[] };

export async function createPost(
  body: RequestCreatePost,
): Promise<ResponsePost> {
  const { data } = await axiosInstance.post('/posts', body);
  return data;
}
