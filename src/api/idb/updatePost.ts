import { openDb } from './openDb';
import { UserPost, UserPostInput } from '../../types';

export const updatePost = async (postId: IDBValidKey, payload: UserPostInput) => {
  const db = await openDb();

  return new Promise<IDBValidKey>((resolve, reject) => {
    const transaction = db.transaction(['postStore'], 'readwrite');
    const objectStore = transaction.objectStore('postStore');

    const request = objectStore.get(postId);

    request.onerror = () => {
      reject(request.error);
    };

    request.onsuccess = () => {
      const userPost: UserPost = request.result;
      const currentDate = new Date();

      userPost.body = payload.body;
      userPost.lastEditDate = currentDate;

      const requestUpdate = objectStore.put(userPost);

      requestUpdate.onerror = () => {
        reject(requestUpdate.error);
      };

      requestUpdate.onsuccess = () => {
        resolve(requestUpdate.result);
      };
    };
  });
};
