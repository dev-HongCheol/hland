import { setBreadcrumbs, setHoverCategory, setSelectedCategory } from '@libs/stores/product';
import { Typography, styled, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { HeaderMenu } from './menu';
import { CategoryItemProps } from './data/categoryItem.types';
import useCategoryItem from './data/useCategoryItem';
import muiTheme from '@libs/theme';

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
      sx={{
        '&:hover': {
          borderBottom: '4px solid black',
        },
        borderBottom: selectedCategory === name ? '4px solid black' : 'none',
      }}
    >
      <Link
        to={'#'}
        onClick={() => {
          dispacth(setSelectedCategory(name));
          dispacth(setBreadcrumbs([name]));
          dispatchCategoryMenu(false);
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={useMediaQuery(muiTheme.breakpoints.up('md')) ? '1rem' : '0.65rem'}
          textAlign={'center'}
          component={'span'}
        >
          {name.toUpperCase()}
        </Typography>
      </Link>
      {categoryMenu.isShow && hoverCategory === name && <HeaderMenu topPosition={categoryMenu.topPosition} />}
    </CategoryItemDiv>
  );
};

export default CategoryItem;
