import { useCallback } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import useActiveProfileId from '../useActiveProfileId';
import { Profile } from '../../types';
import { deleteProfile } from '../../api/deleteProfile';
import { useDispatch } from '../../store/hooks';
import { unsetActiveProfile } from '../../store/reducers/activeProfile';

export const useDeleteProfileMutation = () => {
  const activeProfileId = useActiveProfileId();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const mutationFn = useCallback((profile: Profile) => {
    return deleteProfile(Number(profile.id)).then(() => {
      queryClient.invalidateQueries({ queryKey: ['userPosts'] });
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      queryClient.invalidateQueries({ queryKey: ['profiles'] });

      if (activeProfileId === profile.id) {
        dispatch(unsetActiveProfile());
      }
    }) 
  }, [queryClient, activeProfileId, dispatch]);

  return useMutation({
    mutationFn,
  });
};
