import { deletePost as idbDeletePost } from './idb/deletePost';

export const deletePost = async (postId: number) => {
  idbDeletePost(postId);
};
