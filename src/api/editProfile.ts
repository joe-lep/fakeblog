import { Profile, ProfilePayload } from '../types'
import { updateProfile } from './idb/updateProfile'

export const editProfile = async (profileId: number, payload: ProfilePayload) => {
  const resultId = await updateProfile(profileId, payload);

  const result : Profile = {...payload, id: resultId};

  return result;
};
