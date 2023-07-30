import { getAuth } from 'firebase/auth';
import { useEffect, useRef, useState } from 'react';
import { useIdToken } from 'react-firebase-hooks/auth';
import _ from 'lodash-es';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setHeaderInfo } from '@libs/stores/common';
import { setCategoryMenu } from '@libs/stores/product';

const useHeader = () => {
  const auth = getAuth();
  // const [user, loading, error] = useIdToken(auth);
  const [user] = useIdToken(auth);

  const categoriesHeight = 31;
  const defaultHeaderHeight = 128;

  const dispatch = useAppDispatch();
  const { selectedCategory, categoryMenu } = useAppSelector((state) => state.product);
  const { headerInfo } = useAppSelector((state) => state.common);
  const headerMenuRef = useRef<HTMLDivElement>(null);

  const windowScroll = () => {
    const scrolly = window.scrollY;
    const contentEle: HTMLDivElement | null = document.querySelector('#content');
    if (!contentEle) return;

    if (scrolly > headerInfo.height / 2) {
      dispatch(setHeaderInfo({ isDense: true, height: defaultHeaderHeight / 2 }));
      contentEle.style.paddingTop = `${headerInfo.height / 2}px`;
    } else {
      dispatch(setHeaderInfo({ isDense: false, height: defaultHeaderHeight }));
      contentEle.style.paddingTop = '0';
    }

    // console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', windowScroll);
    return () => window.removeEventListener('scroll', windowScroll);
  }, []);

  useEffect(() => {
    console.log(headerInfo.isDense);
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
    user,
    selectedCategory,
    headerMenuRef,
    categoryMenu,
  };
};

export default useHeader;
