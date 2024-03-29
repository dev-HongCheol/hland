import { Grid, Typography, TextField, Alert, AlertTitle } from '@mui/material';
import { useAccountSignUpForm } from './data';
import { AccountSignUpButtons } from './buttons';
import { EmailForm } from './email-form';

const AccountSignUpForm = () => {
  const {
    t,
    handleSignUp,
    register,
    handleSubmit,
    errors,
    reset,
    trigger,
    getValues,
    signUpGuideAlert,
    setSignUpGuideAlert,
    emailVerified,
    setEmailVerified,
  } = useAccountSignUpForm();

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      style={{
        width: '100%',
      }}
    >
      <Grid container direction="column" alignItems={'center'} p={4}>
        <Grid item textAlign={'center'} mt={4}>
          <Typography variant={'h4'}>{t('account.signUp.title')}</Typography>
        </Grid>
        <Grid item my={3}>
          <Alert severity={signUpGuideAlert.type}>
            <AlertTitle></AlertTitle>
            {t(signUpGuideAlert.msg)}
          </Alert>
        </Grid>
        <Grid container justifyContent={'center'} rowGap={3} my={4}>
          <Grid item textAlign={'center'} xs={12} md={8} lg={7}>
            <EmailForm
              register={register}
              error={errors.email}
              trigger={trigger}
              getValues={getValues}
              setSignUpGuideAlert={setSignUpGuideAlert}
              setEmailVerified={setEmailVerified}
              emailVerified={emailVerified}
            />
          </Grid>
          {emailVerified && (
            <>
              <Grid item textAlign={'center'} xs={12} md={8} lg={7}>
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

              <Grid item textAlign={'center'} xs={12} md={8} lg={7}>
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
            </>
          )}
        </Grid>
        {emailVerified && (
          <>
            <Grid item textAlign={'center'}>
              <AccountSignUpButtons reset={reset} />
            </Grid>
          </>
        )}
      </Grid>
    </form>
  );
};

export default AccountSignUpForm;
