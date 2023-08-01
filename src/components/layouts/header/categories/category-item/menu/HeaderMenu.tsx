import { Box, Grid, Link, Typography, styled } from '@mui/material';
import { useHeaderMenu } from './data';
import { Fragment } from 'react';

type HanderMenuProps = {
  topPosition: number;
};

const HeaderMenuLink = styled(Link)({
  '&:hover': {
    color: '#123ad4',
  },
});

const HeaderMenu = ({ topPosition }: HanderMenuProps) => {
  const {
    headerMenuRef,
    selectedSubCategories,
    selectedCategory,
    dispatch,
    setSelectedCategory,
    hoverCategory,
    setBreadcrumbs,
  } = useHeaderMenu();

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
          {selectedSubCategories.map((selectedSubCategory) => {
            // console.log(Object.keys(selectedSubCategory)[0]);
            return (
              <Fragment key={Object.keys(selectedSubCategory)[0]}>
                <Grid item xs={2} textAlign={'left'}>
                  <Grid container direction={'column'}>
                    <Grid item mb={1}>
                      <HeaderMenuLink href="#" underline="hover">
                        <Typography
                          fontWeight={800}
                          component={'span'}
                          fontSize={'0.95rem'}
                          onClick={() => {
                            dispatch(setSelectedCategory(selectedCategory || hoverCategory));
                            dispatch(
                              setBreadcrumbs([selectedCategory || hoverCategory, Object.keys(selectedSubCategory)[0]]),
                            );
                          }}
                        >
                          {Object.keys(selectedSubCategory)[0]}
                        </Typography>
                      </HeaderMenuLink>
                    </Grid>
                    {Object.values(selectedSubCategory)[0].map((menu) => (
                      <Grid item key={menu} mt={1}>
                        <HeaderMenuLink
                          href="#"
                          underline="hover"
                          fontSize={'0.75rem'}
                          onClick={() =>
                            dispatch(
                              setBreadcrumbs([
                                selectedCategory || hoverCategory,
                                Object.keys(selectedSubCategory)[0],
                                menu,
                              ]),
                            )
                          }
                        >
                          {menu}
                        </HeaderMenuLink>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Fragment>
            );
          })}
          {/* {menuRender()} */}
        </Grid>
      </Box>
    </div>
  );
};
export default HeaderMenu;
