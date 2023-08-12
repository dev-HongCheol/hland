import { Button, Grid, TextField } from '@mui/material';
import { FieldError, UseFormGetValues, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import { SignUp } from '../data';
import { useEmailForm } from './data';
import { Dispatch, SetStateAction } from 'react';

type EmailFormProps = {
  register: UseFormRegister<SignUp>;
  error: FieldError | undefined;
  trigger: UseFormTrigger<SignUp>;
  getValues: UseFormGetValues<SignUp>;
  setSignUpguideMsg: Dispatch<SetStateAction<string>>;
  setEmailVerified: Dispatch<SetStateAction<boolean>>;
};

const EmailForm = ({ register, error, trigger, getValues, setSignUpguideMsg, setEmailVerified }: EmailFormProps) => {
  const { t, handleSendEmailVerification, timer, emailVerifiedCheckTime } = useEmailForm(
    trigger,
    getValues,
    setSignUpguideMsg,
    setEmailVerified,
  );
  return (
    <Grid container>
      <Grid item>
        <TextField
          id="email"
          error={!!error}
          helperText={error ? t(`${error?.message}`) : ''}
          label={t('account.signUp.email')}
          variant="outlined"
          {...register('email')}
          fullWidth
        />
      </Grid>
      <Grid item xs={'auto'}>
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
        {emailVerifiedCheckTime >= 1 && (
          <>
            <br />
            {timer}
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default EmailForm;
