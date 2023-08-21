import { http } from '@libs/http';
import { ReqSignUp, ResSignUp } from '.';
import { Users } from '@components/account/data';

export const signUp = (account: ReqSignUp) => http.post<ResSignUp>('/v1/accounts:signUp', account);
export const getAccount = (idToken: string) => http.post<Users>('v1/accounts:lookup', { idToken });
export const sendOobCode = (idToken: string) =>
  http.post('v1/accounts:sendOobCode', { idToken, requestType: 'VERIFY_EMAIL' });
export const deleteAccount = (idToken: string) => http.post('v1/accounts:delete', { idToken });
