/* eslint-disable no-fallthrough */

export const upgradeDb = (request : IDBOpenDBRequest, oldVersion: number) => {
  const db = request.result;

  switch (oldVersion) {
    default:
      const profileStore = db.createObjectStore('profileStore', {keyPath: 'id', autoIncrement: true});
      profileStore.createIndex('name', 'name');
      const postStore = db.createObjectStore('postStore', { keyPath: 'id', autoIncrement: true });
      postStore.createIndex('authorId', 'authorId');
      postStore.createIndex('title', 'title');
      postStore.createIndex('createdDate', 'createdDate');
      postStore.createIndex('lastEditData', 'lastEditDate');
  }
};
