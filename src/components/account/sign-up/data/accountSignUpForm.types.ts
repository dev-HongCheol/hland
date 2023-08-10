import { object, ref, string, InferType } from 'yup';

export const signUpSchema = object().shape({
  email: string().email('account.signUp.emailVaildation').required('account.signUp.emailRequired'),
  password: string()
    .required('account.signUp.passwordRequired')
    .min(8, 'account.signUp.passwordMin')
    .max(20, 'account.signUp.passwordMax'),
  passwordConfirmation: string()
    .required('account.signUp.passwordConfirmationRequired')
    .min(8, 'account.signUp.passwordMin')
    .max(20, 'account.signUp.passwordMax')
    .oneOf([ref('password')], 'account.signUp.passwordDoNotMatch'),
});

export type SignUp = InferType<typeof signUpSchema>;

export type ReqSignUp = {
  email: string;
  password: string;
  returnSecureToken: true;
};

export type ResSignUp = {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};
