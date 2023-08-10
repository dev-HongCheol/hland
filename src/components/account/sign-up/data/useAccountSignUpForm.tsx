import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@libs/router/data';
import { signUp } from './accountSignUpForm.api';
import { ReqSignUp, SignUp, signUpSchema } from '.';

const useAccountSignUpForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: async () => {
      toast.success(t('member.join.joinSuccesss'));
      navigate(ROUTES.ACCOUNT.LOG_IN.path);
    },
  });

  const handleSignUp = (account: SignUp) => {
    const reqSignUp: ReqSignUp = {
      ...account,
      returnSecureToken: true,
    };

    try {
      mutation.mutateAsync(reqSignUp);
    } catch (e) {
      console.log(e);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  return {
    t,
    mutation,
    handleSignUp,
    register,
    handleSubmit,
    errors,
    reset,
  };
};

export default useAccountSignUpForm;
