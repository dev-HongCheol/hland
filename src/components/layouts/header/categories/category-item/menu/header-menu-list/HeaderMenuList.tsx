import { styled, Grid, Typography } from '@mui/material';
import { HeaderMenuListProps, useHeaderMenuList } from './data';
import { Link } from 'react-router-dom';

const HeaderMenuLink = styled(Link)({
  '&:hover': {
    color: '#123ad4',
    textDecoration: 'underline',
  },
});

const HeaderMenuList = ({ topMenuName, subMenuNames }: HeaderMenuListProps) => {
  const { handleOnClickMenu, isMdMoreThenScreen } = useHeaderMenuList();
  return (
    <Grid item xs={2} textAlign={'left'}>
      <Grid container direction={'column'}>
        <Grid item mb={1}>
          <HeaderMenuLink to={'#'}>
            <Typography
              fontWeight={800}
              component={'span'}
              fontSize={isMdMoreThenScreen ? '0.95rem' : '0.85rem'}
              onClick={() => handleOnClickMenu([topMenuName])}
            >
              {topMenuName}
            </Typography>
          </HeaderMenuLink>
        </Grid>
        {subMenuNames.map((subMenuName) => (
          <Grid item key={subMenuName} mt={1}>
            <HeaderMenuLink to={'#'}>
              <Typography
                component={'span'}
                fontSize={isMdMoreThenScreen ? '0.85rem' : '0.45rem'}
                letterSpacing={isMdMoreThenScreen ? 'auto' : '-0.3px'}
                onClick={() => handleOnClickMenu([topMenuName, subMenuName])}
              >
                {subMenuName}
              </Typography>
            </HeaderMenuLink>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HeaderMenuList;
