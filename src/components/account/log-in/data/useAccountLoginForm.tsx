import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Login, loginSchema } from './accountLoginForm.types';
import { useMutation } from '@tanstack/react-query';
import { login } from './accountLoginForm.api';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@libs/router/data';
import { http } from '@libs/http';

const useAccountLoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      returnSecureToken: true,
    },
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      sessionStorage.setItem('user', JSON.stringify(data));
      /* http.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode', {
        requestType: 'VERIFY_EMAIL',
        idToken: data.idToken,
      }); */
      navigate(ROUTES.INDEX.path);
    },
  });

  const handleLogin = (login: Login) => {
    console.log(login);

    mutation.mutateAsync(login);
  };

  return { t, register, errors, handleSubmit, handleLogin };
};

export default useAccountLoginForm;
