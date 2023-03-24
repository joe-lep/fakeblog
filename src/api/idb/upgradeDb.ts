export const upgradeDb = (request : IDBOpenDBRequest) => {
  const db = request.result;

  switch (db.version) {
    case 1:
    case 2:
    case 3:
    case 4:
      const profileStore = db.createObjectStore('profileStore', {keyPath: 'id', autoIncrement: true});
      profileStore.createIndex('name', 'name');
  }
};
