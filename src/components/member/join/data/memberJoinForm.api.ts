import { http } from '@libs/http';
import { ReqMemberJoin, ResMemberJoin } from '.';

export const postMember = (member: ReqMemberJoin) => http.httpPost<ResMemberJoin>('/v1/accounts:signUp', member);
