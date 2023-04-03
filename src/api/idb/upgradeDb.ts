/* eslint-disable no-fallthrough */

export const upgradeDb = (request : IDBOpenDBRequest) => {
  const db = request.result;

  switch (db.version) {
    case 1:
    case 2:
    case 3:
    case 4:
      const profileStore = db.createObjectStore('profileStore', {keyPath: 'id', autoIncrement: true});
      profileStore.createIndex('name', 'name');
    case 5:
      const postStore = db.createObjectStore('postStore', { keyPath: 'id', autoIncrement: true });
      postStore.createIndex('authorId', 'authorId');
      postStore.createIndex('title', 'title');
      postStore.createIndex('createdDate', 'createdDate');
      postStore.createIndex('lastEditData', 'lastEditDate');
  }
};
