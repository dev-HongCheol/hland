import { setHoverCategory, setSelectedCategory } from '@libs/stores/product';
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
  const { dispacth, dispatchCategoryMenu, categoryItemRef, categoryMenu, selectedCategory, hoverCategory } =
    useCategoryItem();

  return (
    <CategoryItemDiv
      ref={categoryItemRef}
      onMouseEnter={() => {
        dispacth(setHoverCategory(name));
        dispatchCategoryMenu(true);
      }}
      onMouseLeave={() => {
        dispatchCategoryMenu(false);
      }}
      onClick={() => dispacth(setSelectedCategory(name))}
      sx={{
        '&:hover': {
          borderBottom: '4px solid black',
        },
        borderBottom: selectedCategory === name ? '4px solid black' : 'none',
      }}
    >
      <Link to={'#'}>
        <Typography fontWeight={700} fontSize={'1rem'} textAlign={'center'} component={'span'}>
          {name.toUpperCase()}
        </Typography>
      </Link>
      {categoryMenu.isShow && hoverCategory === name && <HeaderMenu topPosition={categoryMenu.topPosition} />}
    </CategoryItemDiv>
  );
};

export default CategoryItem;
