import { Grid } from '@mui/material';
import CategoryItem from '../category-item';
import { useHeaderCategories } from './data';

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
        display: {
          xs: 'none',
          md: 'flex',
        },
      }}
      spacing={0}
    >
      {Object.keys(categories).map((category) => (
        <Grid item key={category} md={0.8}>
          <CategoryItem name={category} />
        </Grid>
      ))}
    </Grid>
  );
};
export default HeaderCategories;
