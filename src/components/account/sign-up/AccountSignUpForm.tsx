import { Grid, Typography, TextField } from '@mui/material';
import { useAccountSignUpForm } from './data';
import { AccountSignUpButtons } from './buttons';

const AccountSignUpForm = () => {
  const { t, handleSignUp, register, handleSubmit, errors, reset } = useAccountSignUpForm();
  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      style={{
        width: '100%',
      }}
    >
      <Grid container direction="column" alignItems={'center'}>
        <Grid item textAlign={'center'} mt={4}>
          <Typography variant={'h4'}>{t('account.signUp.title')}</Typography>
        </Grid>
        <Grid container justifyContent={'center'} rowGap={3} my={4}>
          <Grid item textAlign={'center'} xs={10} md={8} lg={7}>
            <TextField
              id="email"
              error={!!errors.email}
              helperText={errors.email ? t(`${errors.email?.message}`) : ''}
              label={t('account.signUp.email')}
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
              label={t('account.signUp.password')}
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
              label={t('account.signUp.passwordConfirmation')}
              variant="outlined"
              {...register('passwordConfirmation')}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item textAlign={'center'}>
          <AccountSignUpButtons reset={reset} />
        </Grid>
      </Grid>
    </form>
  );
};

export default AccountSignUpForm;
