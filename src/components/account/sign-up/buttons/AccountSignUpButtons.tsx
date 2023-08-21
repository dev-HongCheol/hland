import { Button } from '@mui/material';
import { AccountSignUpButtonsProps, useAccountSignUpButtons } from './data';

const AccountSignUpButtons = ({ reset }: AccountSignUpButtonsProps) => {
  const { t } = useAccountSignUpButtons();
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        color="success"
        sx={{
          marginRight: '3rem',
        }}
      >
        {t('account.signUp.btnJoin')}
      </Button>
      <Button type="reset" variant="contained" color="error" onClick={() => reset()}>
        {t('account.signUp.btnCancle')}
      </Button>
    </>
  );
};

export default AccountSignUpButtons;
