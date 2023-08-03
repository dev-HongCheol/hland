import { Grid, Typography, Box, styled, IconButton } from '@mui/material';
import { MainProductItemProps } from './data/mainProductItem.types';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useRef } from 'react';
const OverlapLayer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  display: 'none',
});

const MainProductItem = ({ id, title, brand, price, thumbnail }: MainProductItemProps) => {
  const productOverlapLayerRef = useRef<HTMLDivElement>(null);
  return (
    <Box>
      <Grid container direction={'column'}>
        <Grid item>
          <div
            style={{
              position: 'relative',
            }}
            onMouseEnter={() => {
              if (productOverlapLayerRef.current) {
                productOverlapLayerRef.current.style.display = 'block';
              }
            }}
            onMouseLeave={() => {
              if (productOverlapLayerRef.current) {
                productOverlapLayerRef.current.style.display = 'none';
              }
            }}
          >
            <img src={thumbnail} style={{ width: '100%' }} height={330} />
            <OverlapLayer p={2} ref={productOverlapLayerRef}>
              <Grid
                height={'100%'}
                sx={{
                  background: `url('${import.meta.env.VITE_SERVER_DOMAIN}/images/bg_over.png')`,
                }}
                container
                justifyContent={'center'}
                alignItems={'center'}
                columnGap={2}
              >
                <Grid item xs={'auto'}>
                  <IconButton
                    size={'large'}
                    sx={{
                      background: '#000',
                      color: '#fff',
                      '&:hover': {
                        background: 'blue',
                      },
                    }}
                  >
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={'auto'}>
                  <IconButton
                    aria-label="add to shopping cart"
                    size={'large'}
                    sx={{
                      background: '#FFF',
                      color: '#000',
                      '&:hover': {
                        background: 'blue',
                        color: '#FFF',
                      },
                    }}
                  >
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </OverlapLayer>
          </div>
        </Grid>
        <Grid item>
          <Typography component={'p'} fontWeight={550} fontSize={'0.9rem'}>
            {brand}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component={'p'} fontSize={'0.8rem'} letterSpacing={1} color={'#6b6b6b'}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component={'p'} fontSize={'0.8rem'} letterSpacing={1} color={'#6b6b6b'}>
            {`${price}$`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainProductItem;
