export type ProfilePayload = {
  name: string;
  bio?: string;
};

export type Profile = ProfilePayload & {
  id: IDBValidKey;
};
