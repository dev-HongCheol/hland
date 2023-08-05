import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Member, memberSchema } from './member.types';
import { http } from '@libs/http';
import { useMutation } from '@tanstack/react-query';

const MemberJoinContainer = () => {
  const { t } = useTranslation();

  const postMember = async (member: Member) => await http.httpPost('/v1/accounts:signUp');

  const mutation = useMutation({
    mutationFn: postMember,
  });

  const onSubmitMemberJoin = (member: Member) => {
    console.log(member);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(memberSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmitMemberJoin)}
      style={{
        width: '100%',
      }}
    >
      <Grid container direction="column" alignItems={'center'}>
        <Grid item textAlign={'center'} mt={4}>
          <Typography variant={'h4'}>{t('member.join.title')}</Typography>
        </Grid>
        <Grid container justifyContent={'center'} rowGap={3} my={4}>
          <Grid item textAlign={'center'} xs={10} md={8} lg={7}>
            <TextField
              id="email"
              error={!!errors.email}
              helperText={errors.email ? t(`${errors.email?.message}`) : ''}
              label={t('member.join.email')}
              variant="outlined"
              {...register('email')}
              fullWidth
            />
          </Grid>

          <Grid item textAlign={'center'} xs={10} md={8} lg={7}>
            <TextField
              id="password"
              type="password"
              error={!!errors.password}
              helperText={errors.password ? t(`${errors.password?.message}`) : ''}
              label={t('member.join.password')}
              variant="outlined"
              {...register('password')}
              fullWidth
            />
          </Grid>

          <Grid item textAlign={'center'} xs={10} md={8} lg={7}>
            <TextField
              id="passwordConfirmation"
              type="password"
              error={!!errors.passwordConfirmation}
              helperText={errors.passwordConfirmation ? t(`${errors.passwordConfirmation?.message}`) : ''}
              label={t('member.join.passwordConfirmation')}
              variant="outlined"
              {...register('passwordConfirmation')}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item textAlign={'center'}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{
              marginRight: '3rem',
            }}
          >
            {t('member.join.btnJoin')}
          </Button>
          <Button type="reset" variant="contained" color="error" onClick={() => reset()}>
            {t('member.join.btnCancle')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MemberJoinContainer;
