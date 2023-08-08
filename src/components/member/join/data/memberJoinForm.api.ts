import { http } from '@libs/http';
import { ReqMember, ResMemberJoin } from '.';

export const signUp = (member: ReqMember) => http.httpPost<ResMemberJoin>('/v1/accounts:signUp', member);
export const getUser = (idToken: string) => http.httpPost('v1/accounts:lookup', { idToken });
export const sendOobCode = (idToken: string) =>
  http.httpPost('v1/accounts:sendOobCode', { idToken, requestType: 'VERIFY_EMAIL' });
export const deleteUser = (idToken: string) => http.httpPost('v1/accounts:delete', { idToken });
