export interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface IUserProfile {
  userId: string;
  avatar?: string;
  bio?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}
