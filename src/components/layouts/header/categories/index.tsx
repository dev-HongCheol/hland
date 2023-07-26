import { Grid } from '@mui/material';
import CategoryItem from '../category-item';

const Categories = () => {
  const categoriesMapper = [
    { women: 'womens-dresses' },
    { men: 'mens-shirts' },
    { shoes: ['womens-shoes', 'mens-shoes'] },
    { bag: 'womens-bags' },
  ];

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderBottom: '1px solid #e9e8e8',
        display: {
          xs: 'none',
          md: 'flex',
        },
      }}
    >
      {categoriesMapper.map((category) => (
        <Grid item key={Object.keys(category)[0]}>
          <CategoryItem name={Object.keys(category)[0]} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
