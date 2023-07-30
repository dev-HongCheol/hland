import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setCategoryMenu, setSelectedCategory } from '@libs/stores/product';
import { Typography, Box, styled } from '@mui/material';
import { MouseEvent, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export type CategoryItemProps = {
  name: string;
};

const CategoryItemDiv = styled('div')({
  height: '30px',
  margin: '0 10%',
  textAlign: 'center',
});

const CategoryItem = ({ name }: CategoryItemProps) => {
  const dispacth = useAppDispatch();
  const categoryItemRef = useRef<HTMLDivElement>(null);

  const dispatchCategoryMenu = (isShow: boolean) => {
    const categoryItemLink = categoryItemRef.current;
    if (!categoryItemLink) return;
    const topPosition = categoryItemLink.getBoundingClientRect().bottom;
    dispacth(setCategoryMenu({ isShow, topPosition }));
  };

  return (
    <CategoryItemDiv
      ref={categoryItemRef}
      onMouseEnter={() => {
        dispacth(setSelectedCategory(name));
        dispatchCategoryMenu(true);
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
        <Typography fontWeight={700} fontSize={'1.1rem'} textAlign={'center'} component={'span'}>
          {name.toUpperCase()}
        </Typography>
      </Link>
    </CategoryItemDiv>
  );
};

export default CategoryItem;
