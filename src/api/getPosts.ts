import { getAllPosts } from './idb/getAllPosts';
import { getPostsByAuthorId } from './idb/getPostsByAuthorId';

export const getPosts = (authorId : number | undefined) => {
  if (authorId == null) {
    return getAllPosts();
  }

  return getPostsByAuthorId(authorId);
};
