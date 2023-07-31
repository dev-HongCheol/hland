import { Box, Grid } from '@mui/material';
import { useHeaderMenu } from './data';

type HanderMenuProps = {
  topPosition: number;
};

const HeaderMenu = ({ topPosition }: HanderMenuProps) => {
  const { menuRender, headerMenuRef } = useHeaderMenu();

  return (
    <div
      ref={headerMenuRef}
      style={{
        top: topPosition,
        background: 'white',
        // opacity: '1',
        transition: '.3s ease-out',
        borderBottom: '1px solid #dddddd',
        borderTop: '1px solid #dddddd',
        position: 'absolute',
        width: '100%',
        left: 0,
        textAlign: 'center',
      }}
    >
      <Box maxWidth={900} mx={'auto'} width={'90%'}>
        <Grid container height={400} pt={6}>
          {menuRender()}
        </Grid>
      </Box>
    </div>
  );
};
export default HeaderMenu;
