import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deletePost } from '../../api/deletePost';
import useActiveProfileId from '../useActiveProfileId';
import { UserPost } from '../../types';

export const useDeletePostMutation = () => {
  const activeProfileId = useActiveProfileId();
  const queryClient = useQueryClient();

  const mutationFn = useCallback((postData: UserPost) => {
    if (activeProfileId == null) {
      return Promise.reject(new Error('There is no active profile'));
    }

    if (activeProfileId !== postData.authorId) {
      return Promise.reject(new Error('A post can only be deleted by its author'));
    }

    return deletePost(Number(postData.id)).then(() => {
      queryClient.invalidateQueries({ queryKey: ['userPosts']})
    });
  }, [activeProfileId, queryClient]);

  return useMutation({
    mutationFn,
  });
};
