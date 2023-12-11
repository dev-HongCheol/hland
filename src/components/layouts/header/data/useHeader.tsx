import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setHeaderInfo } from '@libs/stores/common';
import { setCategoryMenu } from '@libs/stores/product';
import _ from 'lodash-es';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import muiTheme from '@libs/theme';

const useHeader = () => {
  const categoriesHeight = 50;
  const defaultHeaderHeight = 128;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedCategory, categoryMenu } = useAppSelector((state) => state.product);
  const { headerInfo } = useAppSelector((state) => state.common);
  const headerMenuRef = useRef<HTMLDivElement>(null);
  const isMdMoreThenScreen = useMediaQuery(muiTheme.breakpoints.up('md'));
  const logoTitle = headerInfo.isDense ? 'H' : isMdMoreThenScreen ? 'H.LAND' : 'H';

  const windowScroll = _.throttle(() => {
    const scrolly = window.scrollY;
    const contentEle: HTMLDivElement | null = document.querySelector('#content');
    if (!contentEle) return;

    if (scrolly > headerInfo.height / 2) {
      dispatch(setHeaderInfo({ isDense: true, height: defaultHeaderHeight / 2 }));
      // contentEle.style.paddingTop = `${headerInfo.height / 2}px`;
    } else {
      dispatch(setHeaderInfo({ isDense: false, height: defaultHeaderHeight }));
      // contentEle.style.paddingTop = '0';
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', windowScroll);
    return () => window.removeEventListener('scroll', windowScroll);
  }, []);

  useEffect(() => {
    let topPosition = 0;
    if (headerInfo.isDense) {
      topPosition = categoryMenu.topPosition - defaultHeaderHeight / 2;
    } else {
      topPosition = categoryMenu.topPosition + defaultHeaderHeight / 2;
    }
    dispatch(setCategoryMenu({ ...categoryMenu, topPosition }));
  }, [headerInfo.isDense]);

  return {
    headerInfo,
    categoriesHeight,
    selectedCategory,
    headerMenuRef,
    categoryMenu,
    navigate,
    logoTitle,
  };
};

export default useHeader;
