import { Button } from '@mui/material';
import { useMemberJoinButtons } from './data';
import { MemberJoinButtonsProps } from './data/MemberJoinButtons.types';

const MemberJoinButtons = ({ reset, submitDisabled }: MemberJoinButtonsProps) => {
  const { t } = useMemberJoinButtons();
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        color="success"
        sx={{
          marginRight: '3rem',
        }}
        disabled={!submitDisabled}
      >
        {t('member.join.btnJoin')}
      </Button>
      <Button type="reset" variant="contained" color="error" onClick={() => reset()}>
        {t('member.join.btnCancle')}
      </Button>
    </>
  );
};

export default MemberJoinButtons;
