import { getPostById } from './idb/getPostById';

export const getSinglePost = async (postId: number) => {
  return getPostById(postId);
};
