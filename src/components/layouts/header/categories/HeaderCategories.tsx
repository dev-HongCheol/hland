import { Grid } from '@mui/material';
import { useHeaderCategories } from './data';
import { CategoryItem } from './category-item';

const HeaderCategories = () => {
  const { categories } = useHeaderCategories();

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderBottom: '1px solid #e9e8e8',
      }}
      columnSpacing={5}
    >
      {/* { Object.keys(categories).map((category) => (
        <Grid item key={category} xs={'auto'}>
          <CategoryItem name={category} />
        </Grid>
      ))} */}
      {categories.map((category) => (
        <Grid item key={category.name} xs={'auto'}>
          <CategoryItem name={category.name} />
        </Grid>
      ))}
    </Grid>
  );
};
export default HeaderCategories;
