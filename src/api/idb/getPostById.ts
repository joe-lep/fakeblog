import { UserPost } from '../../types';
import { openDb } from './openDb';

export const getPostById = async (postId: number) => {
  const db = await openDb();

  return new Promise<UserPost>((resolve, reject) => {
    const transaction = db.transaction(['postStore']);
    const postStore = transaction.objectStore('postStore');

    const request = postStore.get(postId);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      resolve(request.result);
    }
  });
};
