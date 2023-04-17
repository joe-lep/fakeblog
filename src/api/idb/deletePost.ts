import { openDb } from './openDb';

export const deletePost = async (postId: IDBValidKey) => {
  const db = await openDb();

  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(['postStore'], 'readwrite');
    const postStore = transaction.objectStore('postStore');

    const request = postStore.delete(postId);

    request.onerror = () => {
      reject(request.error);
    }

    request.onsuccess = () => {
      resolve();
    }
  });
};
