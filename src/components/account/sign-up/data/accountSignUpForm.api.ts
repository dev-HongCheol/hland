import { http } from '@libs/http';
import { ReqSignUp, ResSignUp } from '.';

export const signUp = (account: ReqSignUp) => http.httpPost<ResSignUp>('/v1/accounts:signUp', account);
