import { Profile } from '../../types';
import { openDb } from './openDb';

export const getProfileById = async (profileId: number) => {
  const db = await openDb();

  return new Promise<Profile>((resolve, reject) => {
    const transaction = db.transaction(['profileStore']);
    const profileStore = transaction.objectStore('profileStore');

    const request = profileStore.get(profileId);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      resolve(request.result);
    }
  });
};
