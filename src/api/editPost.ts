import { UserPostInput } from '../types';
import { updatePost } from './idb/updatePost';

export const editPost = async (postId: number, payload: UserPostInput) => {
  const result = await updatePost(postId, payload);

  return Number(result);
};
