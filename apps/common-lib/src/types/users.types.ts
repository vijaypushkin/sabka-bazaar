export interface UserDocument {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export type UserDocumentSansID = Omit<UserDocument, "_id">;
export type UserDocumentDefault = Omit<UserDocument, "password">;
