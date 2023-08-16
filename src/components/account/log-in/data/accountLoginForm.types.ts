import { InferType, boolean, object, string } from 'yup';

export const loginSchema = object().shape({
  email: string().email('account.login.emailVaildation').required('account.login.emailRequired'),
  password: string().required('account.login.passwordRequired'),
  returnSecureToken: boolean(),
});

export type Login = InferType<typeof loginSchema>;

export type ResLogin = {
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
};
