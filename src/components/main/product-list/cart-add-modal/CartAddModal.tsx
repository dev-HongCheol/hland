import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { useFieldArray, useForm } from 'react-hook-form';
import { Product } from '../data';
import { yupResolver } from '@hookform/resolvers/yup';
import { CartAddModalForm, cartAddModalSchema } from './data/cartAddModal.types';
import { QuantityBySizeForm } from './quantity-by-size-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  border: 'none',
};

export type CartAddModalProps = {
  product: Product;
};

const CartAddModal = ({ product }: CartAddModalProps) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  const [size, setSize] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  const { control, handleSubmit, setValue, getValues, watch } = useForm({
    defaultValues: { pId: product.id, orderCounts: [], totalAmount: 0 },
    resolver: yupResolver(cartAddModalSchema),
  });

  const handleSubmitAddCart = (data: CartAddModalForm) => {
    console.log(data);
  };

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    // console.log(getValues('totalAmount'), 14412414);
    const orderCounts = getValues('orderCounts');
    const totalCount = orderCounts.reduce((preVal, curVal) => {
      preVal += curVal.count;

      return preVal;
    }, 0);
    const totalAmount = totalCount * product.price;
    setTotalAmount(totalAmount);
    setValue('totalAmount', totalAmount);
  }, [watch('orderCounts')]);

  return (
    <Modal
      disableAutoFocus
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit(handleSubmitAddCart)}>
          <Grid container>
            <Grid
              item
              xs
              sx={{
                bgcolor: 'background.paper',
                p: 2,
              }}
            >
              <Grid container direction={'column'} gap={2}>
                <Grid item>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {t('product.cartAddModal.title')}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container columnGap={3}>
                    <Grid item width={100}>
                      <img src={product.thumbnail} width={'100%'} />
                    </Grid>
                    <Grid item>
                      <Typography fontSize={'0.9rem'} fontWeight={'bold'} mb={1}>
                        {product.brand}
                      </Typography>
                      <Typography
                        title={product.title}
                        fontSize={'0.85rem'}
                        mb={3}
                        sx={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          width: 145,
                        }}
                      >
                        {product.stock === 0 && (
                          <Typography fontSize={'0.75rem'} color={'blue'}>
                            [SOLD OUT]
                          </Typography>
                        )}
                        {product.title}
                      </Typography>
                      <Typography fontSize={'0.9rem'}>{product.price.toLocaleString()}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item borderBottom={'1px solid #878585'} borderTop={'1px solid #878585'} py={2}>
                  <FormControl fullWidth>
                    <Select
                      size="small"
                      labelId="product-option-select"
                      id="product-option-select"
                      value={size}
                      onChange={handleChange}
                      defaultValue="S"
                    >
                      {['S', 'M', 'L'].map((size) => (
                        <MenuItem value={size} key={size}>
                          {size}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item borderBottom={'1px solid #878585'}>
                  <QuantityBySizeForm control={control} size={size} setValue={setValue} />
                </Grid>

                <Grid item>
                  <Grid container justifyContent={'space-between'}>
                    <Grid item>
                      <Typography>총 합계 금액</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{totalAmount.toLocaleString()}원</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Button type={'submit'}>add</Button>
                </Grid>
              </Grid>
            </Grid>

            {/* closeButton */}
            <Grid item>
              <Grid container direction={'column'} height={'100%'}>
                <Grid
                  item
                  sx={{
                    bgcolor: 'background.paper',
                    height: 'fit-content',
                    p: 0.5,
                  }}
                  xs="auto"
                >
                  <IconButton aria-label="close Modal" onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
                <Grid item xs>
                  <div
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    onClick={handleClose}
                  ></div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default CartAddModal;
