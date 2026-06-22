import { IUser } from "./User";

export interface IAuthToken {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
}

export interface IAuthSession {
  user: IUser;
  token: IAuthToken;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface IForgotPasswordRequest {
  email: string;
}

export interface IResetPasswordRequest {
  userId: string;
  newPassword: string;
}
