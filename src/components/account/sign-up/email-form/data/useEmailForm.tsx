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
  const idToken = sessionStorage.getItem('idToken') || '';

  const timer = useCallback(() => {
    const time = maxCheckTime - emailVerifiedCheckTime;
    return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;
  }, [emailVerifiedCheckTime, maxCheckTime]);

  const releaseEmailVerified = async () => {
    if (emailVerifiedTimerRef.current || idToken) {
      await deleteAccount(idToken);
      clearInterval(emailVerifiedTimerRef.current);
      emailVerifiedTimerRef.current = undefined;
      setEmailVerifiedCheckTime(0);
      sessionStorage.removeItem('idToken');
    }
  };

  const interval = async (idToken: string) => {
    const emailVerifiedInterval = setInterval(async () => {
      setEmailVerifiedCheckTime((time) => time + 1);

      const resUser = await getAccount(idToken);
      if (resUser.data.users[0].emailVerified) {
        releaseEmailVerified();
        setEmailVerified(true);
        setSignUpGuideAlert({
          type: 'success',
          msg: 'account.signUp.guideMsgEmailVerifiedSuccesss',
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
  }, [emailVerifiedCheckTime]);

  useEffect(() => {
    console.log('unmounted');
    releaseEmailVerified();
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
        const token = res.data.idToken;
        sessionStorage.setItem('idToken', token);

        const resSendMail = await sendOobCode(token);
        if (!resSendMail.data) {
          return;
        }
        setEmailVerifiedCheckTime(1);
        setSignUpGuideAlert({
          type: 'info',
          msg: 'account.signUp.guideMsgContinueMailCheck',
        });
        interval(token);
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
