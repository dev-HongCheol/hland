import { object, ref, string, InferType } from 'yup';

export const memberSchema = object().shape({
  email: string().email('member.join.emailVaildation').required('member.join.emailRequired'),
  password: string()
    .required('member.join.passwordRequired')
    .min(8, 'member.join.passwordMin')
    .max(20, 'member.join.passwordMax'),
  passwordConfirmation: string()
    .required('member.join.passwordConfirmationRequired')
    .min(8, 'member.join.passwordMin')
    .max(20, 'member.join.passwordMax')
    .oneOf([ref('password')], 'member.join.passwordDoNotMatch'),
});

export type Member = InferType<typeof memberSchema>;

export type ReqMemberJoin = {
  email: string;
  password: string;
  returnSecureToken: true;
};

export type ResMemberJoin = {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};
