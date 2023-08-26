import { Button, Grid, IconButton, Typography, styled } from '@mui/material';
import { ChangeEvent } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { OrderCount, QuantityBySizeFormProps, useQuantityBySizeForm } from './data';

const CountNumberInput = styled('input')({
  width: 26,
  height: 26,
  borderRadius: 0,
  backgroundColor: 'black',
  color: 'white',
  outline: 'none',
  border: 'none',
  paddingLeft: '5px',
  '&:focus-visible': {
    borderRadius: 0,
  },
  '&[type="number"]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
});

const OrderCountsContainerGrid = styled(Grid)({
  '&::-webkit-scrollbar': {
    WebkitAppearance: 'none',
    width: '7px',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    boxShadow: '0 0 1px rgba(255, 255, 255, .5)',
  },
});

const QuantityBySizeForm = ({ control, size }: QuantityBySizeFormProps) => {
  const { t, orderCounts, handleUpdateOrderCount, remove } = useQuantityBySizeForm(control, size);
  return (
    <OrderCountsContainerGrid container direction={'column'} maxHeight={150} overflow={'scroll'} flexWrap={'nowrap'}>
      {(orderCounts as OrderCount[]).map((field, index) => (
        <Grid item xs key={field.size}>
          <Grid container alignItems={'center'} mb={0.4} justifyContent={'center'}>
            <Grid item xs>
              <Grid
                container
                justifyContent={'space-between'}
                alignItems={'center'}
                py={2}
                px={1}
                bgcolor={'rgb(249, 249, 249)'}
              >
                <Grid item>
                  <Typography fontSize={'0.8rem'} component={'span'}>
                    {t('product.cartAddModal.size')}
                  </Typography>
                  <Typography fontSize={'1.1rem'} component={'span'} paddingLeft={1.5} fontWeight={500}>
                    {orderCounts[index].size}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container alignItems={'center'} columnGap={0.1}>
                    <Grid item>
                      <IconButton
                        aria-label="minus"
                        onClick={() => {
                          handleUpdateOrderCount(index, orderCounts[index].count - 1);
                        }}
                        sx={{
                          minWidth: 'auto',
                          width: 26,
                          height: 26,
                          borderRadius: 0,
                          border: '1px solid rgb(150, 150, 150)',
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <CountNumberInput
                        type="number"
                        value={orderCounts[index].count}
                        min={1}
                        max={99}
                        style={{}}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          handleUpdateOrderCount(index, e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        aria-label="plus"
                        onClick={() => {
                          handleUpdateOrderCount(index, orderCounts[index].count + 1);
                        }}
                        sx={{
                          minWidth: 'auto',
                          width: 26,
                          height: 26,
                          borderRadius: 0,
                          border: '1px solid rgb(150, 150, 150)',
                        }}
                      >
                        <AddIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs="auto">
              <IconButton
                aria-label="close Modal"
                onClick={() => {
                  remove(index);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </OrderCountsContainerGrid>
  );
};

export default QuantityBySizeForm;
