import { FAKEBLOG_DB_NAME, FAKEBLOG_DB_VERSION } from './constants';
import { upgradeDb } from './upgradeDb';

export const openDb = () => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB.open(FAKEBLOG_DB_NAME, FAKEBLOG_DB_VERSION);

    request.onupgradeneeded = (event) => upgradeDb(request, event.oldVersion);

    request.onerror = () => {
      reject(new Error(`IndexedDB Error: ${request.error}`));
    };

    request.onsuccess = () => {
      resolve(request.result);
    };
  });
};
