import { useMutation } from '@tanstack/react-query';

import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { postMember } from './memberJoinForm.api';
import { Member, ReqMemberJoin, memberSchema } from '.';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@libs/router/data';

const useMemberJoinForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postMember,
    onSuccess: async () => {
      toast.success(t('member.join.joinSuccesss'));
      navigate(ROUTES.MEMBER.LOGIN.path);
    },
  });

  const onSubmitMemberJoin = (member: Member) => {
    const reqMemberJoin: ReqMemberJoin = {
      email: member.email,
      password: member.password,
      returnSecureToken: true,
    };

    try {
      mutation.mutateAsync(reqMemberJoin);
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
    resolver: yupResolver(memberSchema),
  });

  return {
    t,
    mutation,
    onSubmitMemberJoin,
    register,
    handleSubmit,
    errors,
    reset,
  };
};

export default useMemberJoinForm;
