import { Grid } from '@mui/material';
import { useProductNavCategory } from './data';

const ProductNavCategory = () => {
  const { selectedSubMenu } = useProductNavCategory();
  return (
    <Grid container direction={'column'}>
      {breadcrumbs.length >= 1 && (
        <Grid mb={2}>
          <Typography sx={{ fontSize: '0.93rem', fontWeight: 600 }}>{breadcrumbs[0]}</Typography>
        </Grid>
      )}
      {breadcrumbs.length >= 2 && (
        <Grid>
          <Grid container direction={'column'} rowGap={1}>
            {selectedCategorySubs?.map((subCategories) => (
              <Grid key={subCategories.name}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: '#555',
                    fontSize: '0.77rem',
                    textDecoration: subCategories.name === breadcrumbs[1] ? 'underline' : 'none',
                  }}
                >
                  {subCategories.name}
                </Typography>

                {breadcrumbs.length >= 3 && subCategories.name === breadcrumbs[1] && (
                  <Grid container direction={'column'} my={1} rowGap={0.5}>
                    {subCategories.menus?.map((menu) => (
                      <Grid key={menu}>
                        <Typography
                          ml={2}
                          sx={{
                            color: menu === breadcrumbs[2] ? '#123ad4' : '#555',
                            fontWeight: 500,
                            fontSize: '0.77rem',
                          }}
                        >
                          {menu}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default ProductNavCategory;
