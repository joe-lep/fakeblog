import { useQuery } from 'react-query';

import { getPosts } from '../../api/getPosts';

export const useUserPostsQuery = (authorId?: number) => {
  return useQuery(
    authorId ? ['userPosts'] : ['userPosts', authorId],
    () => {
      return getPosts(authorId);
    }
  );
};
