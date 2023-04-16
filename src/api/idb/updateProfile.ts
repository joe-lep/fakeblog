import { openDb } from './openDb';
import { Profile, ProfilePayload } from '../../types';

export const updateProfile = async (profileId: IDBValidKey, payload: ProfilePayload) => {
  const db = await openDb();

  return new Promise<IDBValidKey>((resolve, reject) => {
    const transaction = db.transaction(['profileStore'], 'readwrite');
    const objectStore = transaction.objectStore('profileStore');

    const request = objectStore.get(profileId);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      const profile: Profile = request.result;

      profile.name = payload.name;
      profile.bio = payload.bio;

      const requestUpdate = objectStore.put(profile);

      requestUpdate.onerror = () => {
        reject(requestUpdate.error);
      };

      requestUpdate.onsuccess = () => {
        resolve(requestUpdate.result);
      };
    };
  });
};
