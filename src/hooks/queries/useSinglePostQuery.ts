import { useQuery } from 'react-query';
import { getSinglePost } from '../../api/getSinglePost';

export const useSinglePostQuery = (postId?: number) => {
  return useQuery(['singlePost', postId], () => {
    if (postId == null || isNaN(postId)) {
      throw new Error('No Post ID');
    }

    return getSinglePost(postId);
  });
};
