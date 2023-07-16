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

const ShoppingCartCount = () => {
  return <ShoppingCartCountDiv>1</ShoppingCartCountDiv>;
};

export default ShoppingCartCount;
