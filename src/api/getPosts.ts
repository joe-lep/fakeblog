import { getAllPosts } from './idb/getAllPosts';

export const getPosts = (authorId : number | undefined) => {
  if (authorId == null) {
    return getAllPosts();
  }

  return Promise.resolve([]);
};
