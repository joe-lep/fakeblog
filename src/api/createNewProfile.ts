import { addProfile } from './idb/addProfile'
import { Profile, ProfilePayload } from '../types'

export const createNewProfile = async (profileData : ProfilePayload) => {
  const id = await addProfile(profileData);

  const result : Profile = {...profileData, id};

  return result;
};
