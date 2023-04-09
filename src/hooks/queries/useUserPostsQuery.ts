import { useQuery } from 'react-query';

import { getPosts } from '../../api/getPosts';

export const useUserPostsQuery = (authorId?: number) => {
  return useQuery(
    authorId ? ['userPosts', authorId] : ['userPosts'],
    () => {
      return getPosts(authorId);
    }
  );
};
