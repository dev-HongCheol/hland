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
  const {
    handleShowCategoryMenu,
    handleHoverCategoryDiv,
    handleClickCategoryItem,
    categoryItemRef,
    categoryMenu,
    selectedCategory,
    hoverCategory,
    isMdMoreThenScreen,
  } = useCategoryItem();

  return (
    <CategoryItemDiv
      ref={categoryItemRef}
      onMouseEnter={() => {
        handleHoverCategoryDiv(true, name);
      }}
      onMouseLeave={() => {
        handleShowCategoryMenu(false);
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
          handleClickCategoryItem(false, name);
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={isMdMoreThenScreen ? '1rem' : '0.65rem'}
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
