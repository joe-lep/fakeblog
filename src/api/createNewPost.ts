import { addUserPost } from './idb/addUserPost';
import { UserPost, UserPostPayload } from '../types/UserPost';

export const createNewPost = async (userPostData : UserPostPayload) => {
  const id = await addUserPost(userPostData);

  const result : UserPost = { ...userPostData, id };

  return result;
};
