import { Grid, Typography, TextField } from '@mui/material';
import { MemberJoinButtons } from './button';
import { useMemberJoinForm } from './data';

const MemberJoinForm = () => {
  const { t, onSubmitMemberJoin, register, handleSubmit, errors, reset } = useMemberJoinForm();
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
          <MemberJoinButtons reset={reset} />
        </Grid>
      </Grid>
    </form>
  );
};

export default MemberJoinForm;
