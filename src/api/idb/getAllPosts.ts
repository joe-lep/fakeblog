import { UserPost } from '../../types/UserPost';
import { openDb } from './openDb';

export const getAllPosts = async () => {
  const db = await openDb();

  return new Promise<Array<UserPost>>((resolve, reject) => {
    const transaction = db.transaction(['postStore']);
    const postStore = transaction.objectStore('postStore');

    const request = postStore.getAll();

    request.onerror = () => {
      reject(request.error);
    }

    request.onsuccess = () => {
      resolve(request.result);
    }
  });
};
