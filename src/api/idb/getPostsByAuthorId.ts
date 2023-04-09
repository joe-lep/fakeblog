import { UserPost } from '../../types/UserPost';
import { openDb } from './openDb';

export const getPostsByAuthorId = async (authorId : IDBValidKey) => {
  const db = await openDb();

  return new Promise<Array<UserPost>>((resolve, reject) => {
    const transaction = db.transaction(['postStore']);
    const postStore = transaction.objectStore('postStore');

    const authorIndex = postStore.index('authorId');
    const request = authorIndex.getAll(authorId);

    request.onerror = () => {
      reject(request.error);
    }

    request.onsuccess = () => {
      resolve(request.result);
    }
  });
};
