import { openDb } from './openDb';

const deleteProfilePosts = async (deletionTransaction: IDBTransaction, profileId: IDBValidKey) => {
  return new Promise<void>((resolve, reject) => {
    const postStore = deletionTransaction.objectStore('postStore');
    const postByAuthorIndex = postStore.index('authorId');
    const postDeletionCursor = postByAuthorIndex.openKeyCursor(profileId);

    postDeletionCursor.onsuccess = () => {
      const cursor = postDeletionCursor.result;

      if (cursor) {
        postStore.delete(cursor.primaryKey);
        cursor.continue();
      }
      else {
        resolve();
      }
    };

    postDeletionCursor.onerror = () => {
      reject(postDeletionCursor.error);
    };
  });
};

export const deleteProfile = async (profileId: IDBValidKey) => {
  const db = await openDb();
  const transaction = db.transaction(['postStore', 'profileStore'], 'readwrite');
  await deleteProfilePosts(transaction, profileId);

  return new Promise<void>((resolve, reject) => {
    const profileStore = transaction.objectStore('profileStore');

    const request = profileStore.delete(profileId);

    request.onsuccess = () => {
      resolve();
    }

    request.onerror = () => {
      reject(request.error);
    };
  });
};
