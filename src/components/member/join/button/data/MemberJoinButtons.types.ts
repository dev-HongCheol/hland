import { UseFormReset } from 'react-hook-form';
import { Member } from '../../data';

export type MemberJoinButtonsProps = {
  reset: UseFormReset<Member>;
  submitDisabled: boolean;
};
