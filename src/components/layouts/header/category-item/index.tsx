import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export type CategoryItemProps = {
  name: string;
};

const CategoryItem = ({ name }: CategoryItemProps) => {
  return (
    <Box
      mx={4}
      height={30}
      sx={[
        {
          '&:hover': {
            borderBottom: '4px solid black',
          },
        },
      ]}
    >
      <Typography fontWeight={700} fontSize={'1.1rem'} textAlign={'center'}>
        <Link to={name}>{name.toUpperCase()}</Link>
      </Typography>
    </Box>
  );
};

export default CategoryItem;
