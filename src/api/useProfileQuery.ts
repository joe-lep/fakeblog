import { useQuery } from 'react-query';
import { getProfileById } from './idb/getProfileById';

export const useProfileQuery = (profileId: number | undefined) => useQuery(['profile', profileId], () => {
  if (profileId == null) {
    return Promise.resolve(null);
  }

  return getProfileById(Number(profileId))
});
