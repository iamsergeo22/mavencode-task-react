// actionCreators.ts
import { LOGIN_REQUEST, LOGOUT } from './actionType';

export const loginRequest = (credentials: { email: string; password: string }) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const logoutRequest = () => ({
  type: LOGOUT,
});

