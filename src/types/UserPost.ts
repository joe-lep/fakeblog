export type UserPostInput = {
  title: string;
  body: string;
}

export type UserPostPayload = {
  title: string;
  body: string;
  authorId: number;
  authorName?: string;
  createdDate: Date;
  lastEditDate: Date;
};

export type UserPost = UserPostPayload & {
  id: IDBValidKey;
};
