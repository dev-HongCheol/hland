import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { forwardRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

const ShoppingCartLayerPopupDiv = styled(Box)({
  position: 'absolute',
  right: '20px',
  display: 'none',
});

type ShoppingCartLayerPopupProps = {
  isShow: boolean;
  handleHiddenShoppingCartLayerPopup: () => void;
};

const ShoppingCartLayerPopup = forwardRef(
  ({ isShow, handleHiddenShoppingCartLayerPopup }: ShoppingCartLayerPopupProps) => {
    const { t } = useTranslation();
    const [checked, setChecked] = useState<number[]>([0]);

    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    return (
      <ShoppingCartLayerPopupDiv
        sx={{
          display: isShow ? 'block' : 'none',
        }}
      >
        <Grid
          container
          direction={'column'}
          p={2}
          sx={{
            border: 1,
            width: '280px',
            height: '440px',
            zIndex: 1,
            background: 'white',
          }}
        >
          <Grid item textAlign={'right'}>
            <IconButton sx={{ padding: 0 }} onClick={() => handleHiddenShoppingCartLayerPopup()}>
              <CloseIcon />
            </IconButton>
          </Grid>

          <Grid item>{t('header.shoppingCart.title')}(0)</Grid>
          <Grid item flexGrow={1}>
            {/* TODO: 상품 리스트 구현 필요 */}
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <ListItem disablePadding>
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked
                      tabIndex={-1}
                      disableRipple
                      inputProps={{
                        'aria-labelledby': 'shoppingCartTotalCheckbox',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText id={'shoppingCartTotalCheckbox'} primary={`전체선택`} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton role={undefined} onClick={handleToggle(1)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(1) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': 'aria-labelledby-1' }}
                    />
                  </ListItemIcon>
                  <ListItemText id={'aria-labelledby-1'} primary={`Line item ${1 + 1}`} />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: 0,
                  }}
                >
                  장바구니
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{
                    borderRadius: 0,
                  }}
                >
                  바로구매
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ShoppingCartLayerPopupDiv>
    );
  },
);

export default ShoppingCartLayerPopup;
