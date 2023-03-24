import { Profile } from '../../types';
import { openDb } from './openDb';

export const getProfiles = async () => {
  const db = await openDb();

  return new Promise<Array<Profile>>((resolve, reject) => {
    const transaction = db.transaction(['profileStore']);
    const profileStore = transaction.objectStore('profileStore');

    const request = profileStore.getAll();

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      resolve(request.result);
    }
  });
};
