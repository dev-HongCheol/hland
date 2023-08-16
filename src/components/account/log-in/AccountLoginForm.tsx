import { Grid, Typography, TextField, Button } from '@mui/material';
import { useAccountLoginForm } from './data';

const AccountLoginForm = () => {
  const { t, register, errors, handleSubmit, handleLogin } = useAccountLoginForm();

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      style={{
        width: '100%',
      }}
    >
      <Grid container direction="column" alignItems={'center'} p={4}>
        <Grid item textAlign={'center'} mt={4}>
          <Typography variant={'h4'}>{t('account.login.title')}</Typography>
        </Grid>

        <Grid container maxWidth={500} justifyContent={'center'} rowGap={3} my={4}>
          <Grid item xs={12}>
            <TextField
              id="email"
              type="text"
              error={!!errors.email}
              helperText={errors.email ? t(`${errors.email?.message}`) : ''}
              label={t('account.signUp.email')}
              variant="outlined"
              {...register('email')}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
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

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="success" fullWidth>
              {t('account.login.btnLogin')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default AccountLoginForm;
