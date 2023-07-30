import { Grid } from '@mui/material';
import { useHeaderMenu } from './data';

type HanderMenuProps = {
  topPosition: number;
};

const HeaderMenu = ({ topPosition }: HanderMenuProps) => {
  const { menuRender, headerMenuRef, handleToggleHeaderMenu } = useHeaderMenu();

  return (
    <div
      ref={headerMenuRef}
      style={{
        top: topPosition,
        background: 'white',
        // opacity: '0',
        transition: '.3s ease-out',
        borderBottom: '1px solid #dddddd',
        borderTop: '1px solid #dddddd',
        position: 'absolute',
        width: '100%',
      }}
      onMouseEnter={() => {
        handleToggleHeaderMenu(true);
      }}
      onMouseLeave={() => {
        handleToggleHeaderMenu(false);
      }}
    >
      <Grid container maxWidth={1536} height={400} justifyContent={'center'} mx={'auto'}>
        {menuRender()}
      </Grid>
    </div>
  );
};
export default HeaderMenu;
