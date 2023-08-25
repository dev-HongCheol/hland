import { Box, Button, FormControl, Grid, IconButton, MenuItem, Modal, Select, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CartAddModalProps } from './data/cartAddModal.types';
import { QuantityBySizeForm } from './quantity-by-size-form';

import { useCartAddModal } from './data';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  border: 'none',
};

const CartAddModal = ({ product }: CartAddModalProps) => {
  const {
    t,
    isShowCartAddModal,
    handleChange,
    handleClose,
    handleSubmit,
    handleSubmitAddCart,
    isDiscount,
    size,
    control,
    totalAmount,
  } = useCartAddModal(product);
  return (
    <Modal
      disableAutoFocus
      open={isShowCartAddModal}
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
                  <Typography id="modal-modal-title" variant="h6" letterSpacing={-0.6}>
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
                      <Typography
                        fontSize={isDiscount ? '0.7rem' : '0.8rem'}
                        fontWeight={isDiscount ? 0 : 600}
                        component={'span'}
                        sx={{
                          textDecoration: isDiscount ? 'line-through' : 'none',
                          color: isDiscount ? 'gray' : 'black',
                        }}
                      >
                        {product.price.toLocaleString()}
                      </Typography>

                      {isDiscount && (
                        <Typography ml={1} fontWeight={600} component={'span'} fontSize={'0.8rem'} letterSpacing={1}>
                          {`${product.discountAmount.toLocaleString()}`}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  borderBottom={'1px solid rgb(222, 222, 222)'}
                  borderTop={'1px solid rgb(222, 222, 222)'}
                  py={2}
                >
                  <FormControl fullWidth>
                    <Select
                      size="small"
                      labelId="product-option-select"
                      id="product-option-select"
                      value={size}
                      onChange={handleChange}
                      defaultValue=""
                    >
                      {['S', 'M', 'L'].map((size) => (
                        <MenuItem value={size} key={size}>
                          {size}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item borderBottom={'1px solid rgb(222, 222, 222)'}>
                  <QuantityBySizeForm control={control} size={size} />
                </Grid>

                <Grid item>
                  <Grid container justifyContent={'space-between'} alignItems={'center'}>
                    <Grid item>
                      <Typography fontSize={'0.75rem'}> {t('product.cartAddModal.totalAmount')}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography component={'span'} fontSize={'1.3rem'} fontWeight={'bold'} mr={1}>
                        {totalAmount.toLocaleString()}
                      </Typography>
                      {t('product.cartAddModal.won')}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item textAlign={'center'}>
                  <Grid container columnSpacing={1}>
                    <Grid item xs={6}>
                      <Button variant={'outlined'} fullWidth onClick={handleClose}>
                        {t('product.cartAddModal.btnCancle')}
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        type={'submit'}
                        variant={'outlined'}
                        sx={{
                          background: 'black',
                          color: 'white',
                          '&:hover': {
                            color: 'black',
                          },
                        }}
                      >
                        {t('product.cartAddModal.btnAdd')}
                      </Button>
                    </Grid>
                  </Grid>
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
