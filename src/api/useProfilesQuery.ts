import { useQuery } from 'react-query';
import { getProfiles } from './idb/getProfiles';

export const useProfilesQuery = () => useQuery('profiles', () =>
  getProfiles()
);
