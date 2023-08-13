import { Button, Grid, TextField } from '@mui/material';
import { FieldError, UseFormGetValues, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import { SignUp, SignUpGuideAlert } from '../data';
import { useEmailForm } from './data';
import { Dispatch, SetStateAction } from 'react';

type EmailFormProps = {
  register: UseFormRegister<SignUp>;
  error: FieldError | undefined;
  trigger: UseFormTrigger<SignUp>;
  getValues: UseFormGetValues<SignUp>;
  setSignUpGuideAlert: Dispatch<SetStateAction<SignUpGuideAlert>>;
  setEmailVerified: Dispatch<SetStateAction<boolean>>;
  emailVerified: boolean;
};

const EmailForm = ({
  register,
  error,
  trigger,
  getValues,
  setSignUpGuideAlert,
  setEmailVerified,
  emailVerified,
}: EmailFormProps) => {
  const { t, handleSendEmailVerification, emailVerifiedCheckTime, timer } = useEmailForm(
    trigger,
    getValues,
    setSignUpGuideAlert,
    setEmailVerified,
  );
  console.log('reload');

  return (
    <Grid container spacing={2} alignItems={'center'}>
      <Grid item xs={12} md>
        <TextField
          id="email"
          error={!!error}
          helperText={error ? t(`${error?.message}`) : ''}
          label={t('account.signUp.email')}
          variant="outlined"
          {...register('email')}
          fullWidth
          disabled={emailVerified}
        />
      </Grid>
      {!emailVerified && (
        <Grid item xs={12} md={'auto'}>
          <Button
            variant="contained"
            color="info"
            sx={{ margin: 'auto 0', textTransform: 'none' }}
            onClick={() => handleSendEmailVerification()}
            fullWidth
          >
            {t('account.signUp.btnSendEmailVerification')}
          </Button>
          <br />
          {emailVerifiedCheckTime !== 0 && (
            <>
              <br />
              {timer()}
            </>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default EmailForm;
