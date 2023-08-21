import { UseFormGetValues, UseFormTrigger } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ReqSignUp, SignUp, SignUpGuideAlert } from '../../data';
import { deleteAccount, getAccount, sendOobCode, signUp } from '../../data/accountSignUpForm.api';
import { useEffect, useState, Dispatch, SetStateAction, useCallback, useRef } from 'react';

const useEmailForm = (
  trigger: UseFormTrigger<SignUp>,
  getValues: UseFormGetValues<SignUp>,
  setSignUpGuideAlert: Dispatch<SetStateAction<SignUpGuideAlert>>,
  setEmailVerified: Dispatch<SetStateAction<boolean>>,
) => {
  const { t } = useTranslation();
  const maxCheckTime = 5 * 60;
  const emailVerifiedTimerRef = useRef<NodeJS.Timer>();
  const [emailVerifiedCheckTime, setEmailVerifiedCheckTime] = useState(0);

  const timer = useCallback(() => {
    const time = maxCheckTime - emailVerifiedCheckTime;
    return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;
  }, [emailVerifiedCheckTime, maxCheckTime]);

  const releaseEmailVerified = async () => {
    const idToken = sessionStorage.getItem('idToken') || '';

    if (idToken) {
      await deleteAccount(idToken);
      sessionStorage.removeItem('idToken');
    }
    if (emailVerifiedTimerRef.current) {
      clearInterval(emailVerifiedTimerRef.current);
      emailVerifiedTimerRef.current = undefined;
    }

    setEmailVerifiedCheckTime(0);
  };

  const interval = async (idToken: string) => {
    const emailVerifiedInterval = setInterval(async () => {
      setEmailVerifiedCheckTime((time) => time + 1);

      const resUser = await getAccount(idToken);
      if (resUser.data.users[0].emailVerified) {
        await releaseEmailVerified();
        setEmailVerified(true);
        setSignUpGuideAlert({
          type: 'success',
          msg: 'account.signUp.guideMsgEmailVerifiedSuccess',
        });
      }
    }, 1000);
    emailVerifiedTimerRef.current = emailVerifiedInterval;
  };

  useEffect(() => {
    if (emailVerifiedCheckTime >= maxCheckTime) {
      releaseEmailVerified();
      setSignUpGuideAlert({
        type: 'error',
        msg: 'account.signUp.guideMsgEmailVerifiedTimeOut',
      });
    }

    return () => {
      console.log('');
    };
  }, [emailVerifiedCheckTime]);

  useEffect(() => {
    releaseEmailVerified();

    return () => {
      releaseEmailVerified();
    };
  }, []);

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
      signUp(reqSingUp).then(async (res) => {
        const idToken = res.data.idToken;
        sessionStorage.setItem('idToken', idToken);

        const resSendMail = await sendOobCode(idToken);
        if (!resSendMail.data) {
          return;
        }
        setEmailVerifiedCheckTime(1);
        setSignUpGuideAlert({
          type: 'info',
          msg: 'account.signUp.guideMsgContinueMailCheck',
        });
        interval(idToken);
      });
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
