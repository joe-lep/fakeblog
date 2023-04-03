import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { createNewPost } from '../../api/createNewPost';
import { useSelector } from '../../store/hooks';
import { UserPostInput, UserPostPayload } from '../../types/UserPost';

export const useCreatePostMutation = () => {
  const authorId = useSelector(state => state.activeProfile.profileId);

  const mutationFn = useCallback((inputData: UserPostInput) => {
    if (authorId == null) {
      return Promise.reject(new Error('noprofile'));
    }

    const currentDate = new Date();
    const payload : UserPostPayload = {
      ...inputData,
      authorId,
      createdDate: currentDate,
      lastEditDate: currentDate,
    };

    return createNewPost(payload);
  }, [ authorId ]);

  return useMutation({
    mutationFn,
  });
};
