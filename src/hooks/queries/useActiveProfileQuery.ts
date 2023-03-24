import { useSelector } from '../../store/hooks';
import { useProfileQuery } from '../../api/useProfileQuery';

export const useActiveProfileQuery = () => {
  const activeProfileId = useSelector(state => state.activeProfile.profileId);

  return useProfileQuery(activeProfileId);
};
