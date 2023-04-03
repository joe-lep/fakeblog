import { openDb } from './openDb';
import { UserPostPayload } from '../../types/UserPost';

export const addUserPost = async (userPostData: UserPostPayload) => {
  const db = await openDb();

  return new Promise<IDBValidKey>((resolve, reject) => {
    const transaction = db.transaction(['postStore'], 'readwrite');

    let result : IDBValidKey = '';

    transaction.oncomplete = event => {
      resolve(result);
    };

    transaction.onerror = () => {
      reject(transaction.error);
    }

    const objectStore = transaction.objectStore('postStore');

    const request = objectStore.add(userPostData);
    request.onsuccess = () => {
      result = request.result;
    }
  });
};
