import { http } from '@libs/http';
import { Login, ResLogin } from './accountLoginForm.types';

export const login = (login: Login) => http.post<ResLogin>(`v1/accounts:signInWithPassword`, login);
