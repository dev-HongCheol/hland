import { styled } from '@mui/material';

const ShoppingCartCountDiv = styled('div')({
  borderRadius: '100%',
  background: 'blue',
  color: 'white',
  width: '30px',
  height: '30px',
  paddingTop: '4px',
  textAlign: 'center',
  '&:hover': {
    cursor: 'pointer',
  },
});

export type ShoppingCartCountProps = {
  count: number;
};
const ShoppingCartCount = ({ count }: ShoppingCartCountProps) => {
  return <ShoppingCartCountDiv>{count}</ShoppingCartCountDiv>;
};

export default ShoppingCartCount;
