import { useMutation } from '@tanstack/react-query';

import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { deleteUser, getUser, sendOobCode, signUp } from './memberJoinForm.api';
import { Member, ReqMember, memberSchema } from '.';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@libs/router/data';
import { useEffect, useState } from 'react';

const useMemberJoinForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [emailVerified, setEmailVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
    trigger,
  } = useForm({
    resolver: yupResolver(memberSchema),
  });

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: async () => {
      toast.success(t('member.join.joinSuccesss'));
      navigate(ROUTES.MEMBER.LOGIN.path);
    },
  });

  const onSubmitMemberJoin = (member: Member) => {
    console.log(member);

    const reqMemberJoin: ReqMember = {
      email: member.email,
      password: member.password,
      returnSecureToken: true,
    };

    try {
      signUpMutation.mutateAsync(reqMemberJoin);
    } catch (e) {
      console.log(e);
    }
  };

  const maxCheckTime = 5 * 60;
  const [emailVerifiedCheckTime, setEmailVerifiedCheckTime] = useState(0);
  const [emailVerifiedTimer, seteMailVerifiedInterval] = useState<NodeJS.Timer>();

  const time = maxCheckTime - emailVerifiedCheckTime;
  const timer = `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;

  // TODO: 한번에 여러개..하는 방법이있나 api호출을 너무 여러번한다. 스파게티코드..
  const emailVerificationMutaion = useMutation({
    mutationFn: signUp,
    onSuccess: async (res) => {
      const idToken = res.data.idToken;
      const resSendMail = await sendOobCode(idToken);
      if (!resSendMail.data) {
        return;
      }
      setEmailVerifiedCheckTime(1);
      toast.success('입력하신 이메일 주소로 인증요청 메일이 발송되었습니다. 이메일을 확인해주세요');
      const emailVerifiedInterval = setInterval(async () => {
        if (emailVerifiedCheckTime >= maxCheckTime) {
          clearInterval(emailVerifiedInterval);
          await deleteUser(idToken);
          toast.error('이메일 인증 시간이 만료되었습니다. 다시 진행하시기 바랍니다');
          return;
        }
        setEmailVerifiedCheckTime((per) => per + 1);

        const resUser = await getUser(idToken);
        if (resUser.data.users[0].emailVerified) {
          clearInterval(emailVerifiedInterval);
          setEmailVerified(true);
          await deleteUser(idToken);
          toast.success('이메일 인증이 완료 되었습니다. 회원가입을 계속 진행해주세요.');
        }
      }, 1000);
      seteMailVerifiedInterval(emailVerifiedInterval);
    },
  });

  useEffect(() => {
    return () => {
      if (emailVerifiedTimer) {
        clearInterval(emailVerifiedTimer);
      }
    };
  });

  const handleSendEmailVerification = async () => {
    const isEmailVaildation = await trigger('email');
    if (!isEmailVaildation) {
      return;
    }
    const email = getValues('email');
    const password = crypto.getRandomValues(new Uint8Array(16)).join('');

    const reqMemberJoin: ReqMember = {
      email,
      password,
      returnSecureToken: true,
    };

    try {
      emailVerificationMutaion.mutateAsync(reqMemberJoin);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    t,
    signUpMutation,
    onSubmitMemberJoin,
    register,
    handleSubmit,
    errors,
    reset,
    handleSendEmailVerification,
    emailVerified,
    setEmailVerified,
    setValue,
    timer,
    emailVerifiedCheckTime,
  };
};

export default useMemberJoinForm;
