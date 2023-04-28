import { deleteProfile as idbDeeteProfile } from './idb/deleteProfile';

export const deleteProfile = async (profileId: number) => {
  idbDeeteProfile(profileId);
};
