import { Button, Grid, IconButton, TextField, styled } from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
import { Control, FieldValues, UseFormSetValue, useFieldArray, useForm, useWatch } from 'react-hook-form';
import { CartAddModalForm } from '../data/cartAddModal.types';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export type QuantityBySizeFormProps = {
  control: Control<any>; //FIXME:타입 수정 필요
  size: string;
  setValue: UseFormSetValue<CartAddModalForm>;
};

export type OrderCount = {
  size: string;
  count: number;
};

const CountNumberInput = styled('input')({
  '&[type="number"]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
    color: 'red',
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

const QuantityBySizeForm = ({ control, size, setValue }: QuantityBySizeFormProps) => {
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: 'orderCounts',
  });
  const orderCounts = useWatch<CartAddModalForm>({
    name: 'orderCounts',
    control,
  }) as OrderCount[];

  // 리스트에 없는 경우만 추가
  useEffect(() => {
    // 기본(빈) 셀릭트 박스 값인 경우 무시
    if (!size) return;
    const findIndex = orderCounts.findIndex((orderCount) => orderCount.size === size);
    if (findIndex === -1) append({ size, count: 1 });
  }, [size, append]);

  useEffect(() => {
    console.log(orderCounts);
  }, [orderCounts]);

  const handleUpdateOrderCount = (index: number, _count: number | string) => {
    const count = Number(_count);
    if (count > 0 && count < 100) update(index, { ...orderCounts[index], count });
  };

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
                <Grid item>사이즈 : {orderCounts[index].size}</Grid>
                <Grid item>
                  <Button
                    aria-label="minus"
                    onClick={() => {
                      handleUpdateOrderCount(index, orderCounts[index].count - 1);
                    }}
                    variant="outlined"
                    sx={{
                      minWidth: 'auto',
                      width: 26,
                      height: 26,
                    }}
                  >
                    <RemoveIcon />
                  </Button>

                  <CountNumberInput
                    type="number"
                    value={orderCounts[index].count}
                    min={1}
                    max={99}
                    style={{
                      width: 26,
                      height: 26,
                    }}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      handleUpdateOrderCount(index, e.target.value);
                    }}
                  />
                  <Button
                    aria-label="plus"
                    onClick={() => {
                      handleUpdateOrderCount(index, orderCounts[index].count + 1);
                    }}
                    variant="outlined"
                    sx={{
                      minWidth: 'auto',
                      width: 26,
                      height: 26,
                    }}
                  >
                    <AddIcon />
                  </Button>
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
