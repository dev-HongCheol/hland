import { Member } from '@containers/member/join/member.types';
import { UseFormReset } from 'react-hook-form';

export type MemberJoinButtonsProps = {
  reset: UseFormReset<Member>;
};
