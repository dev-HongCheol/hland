import { setSelectedCategory } from '@libs/stores/product';
import { Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { HeaderMenu } from './menu';
import { CategoryItemProps } from './data/categoryItem.types';
import useCategoryItem from './data/useCategoryItem';

const CategoryItemDiv = styled('div')({
  textAlign: 'center',
  height: '50px',
  paddingTop: '15px',
});

const CategoryItem = ({ name }: CategoryItemProps) => {
  const { dispacth, dispatchCategoryMenu, categoryItemRef, categoryMenu, selectedCategory } = useCategoryItem();

  return (
    <CategoryItemDiv
      ref={categoryItemRef}
      onMouseEnter={() => {
        dispatchCategoryMenu(true);
        dispacth(setSelectedCategory(name));
      }}
      onMouseLeave={() => {
        dispatchCategoryMenu(false);
      }}
      sx={{
        '&:hover': {
          borderBottom: '4px solid black',
        },
      }}
    >
      <Link to={name}>
        <Typography fontWeight={700} fontSize={'1rem'} textAlign={'center'} component={'span'}>
          {name.toUpperCase()}
        </Typography>
      </Link>
      {categoryMenu.isShow && selectedCategory === name && <HeaderMenu topPosition={categoryMenu.topPosition} />}
    </CategoryItemDiv>
  );
};

export default CategoryItem;
