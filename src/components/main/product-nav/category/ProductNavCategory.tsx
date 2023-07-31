import { Grid } from '@mui/material';
import { useProductNavCategory } from './data';

const ProductNavCategory = () => {
  const { selectedSubMenu } = useProductNavCategory();
  return (
    <Grid container direction={'column'}>
      <Grid>{JSON.stringify(selectedSubMenu)}</Grid>
    </Grid>
  );
};

export default ProductNavCategory;
