import { UseFormGetValues, UseFormTrigger } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ReqSignUp, SignUp } from '../../data';
import { useMutation } from '@tanstack/react-query';
import { deleteAccount, getAccount, sendOobCode, signUp } from '../../data/accountSignUpForm.api';
import { useEffect, useState, Dispatch, SetStateAction } from 'react';

const useEmailForm = (
  trigger: UseFormTrigger<SignUp>,
  getValues: UseFormGetValues<SignUp>,
  setSignUpguideMsg: Dispatch<SetStateAction<string>>,
  setEmailVerified: Dispatch<SetStateAction<boolean>>,
) => {
  const { t } = useTranslation();
  const maxCheckTime = 5 * 60;
  const [emailVerifiedTimer, seteMailVerifiedInterval] = useState<NodeJS.Timer>();
  const [emailVerifiedCheckTime, setEmailVerifiedCheckTime] = useState(0);
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
      setSignUpguideMsg('입력하신 이메일 주소로 인증요청 메일이 발송되었습니다. 이메일을 확인해주세요');
      const emailVerifiedInterval = setInterval(async () => {
        if (emailVerifiedCheckTime >= maxCheckTime) {
          clearInterval(emailVerifiedInterval);
          await deleteAccount(idToken);
          setSignUpguideMsg('이메일 인증 시간이 만료되었습니다. 다시 진행하시기 바랍니다');
          return;
        }
        setEmailVerifiedCheckTime((per) => per + 1);

        const resUser = await getAccount(idToken);
        if (resUser.data.users[0].emailVerified) {
          clearInterval(emailVerifiedInterval);
          setEmailVerified(true);
          await deleteAccount(idToken);
          setSignUpguideMsg('이메일 인증이 완료 되었습니다. 회원가입을 계속 진행해주세요.');
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

    const reqSingUp: ReqSignUp = {
      email,
      password,
      returnSecureToken: true,
    };

    try {
      emailVerificationMutaion.mutateAsync(reqSingUp);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    t,
    handleSendEmailVerification,
    timer,
    emailVerifiedCheckTime,
  };
};

export default useEmailForm;
