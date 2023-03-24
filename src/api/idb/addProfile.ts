import { openDb } from './openDb';
import { ProfilePayload } from '../../types';

export const addProfile = async (profileData : ProfilePayload) => {
  const db = await openDb();

  return new Promise<IDBValidKey>((resolve, reject) => {
    const transaction = db.transaction(['profileStore'], 'readwrite');

    let result : IDBValidKey = '';

    transaction.oncomplete = event => {
      resolve(result);
    };

    transaction.onerror = () => {
      reject(transaction.error);
    }

    const objectStore = transaction.objectStore('profileStore');

    const request = objectStore.add(profileData);
    request.onsuccess = () => {
      result = request.result;
    }
  });
};
