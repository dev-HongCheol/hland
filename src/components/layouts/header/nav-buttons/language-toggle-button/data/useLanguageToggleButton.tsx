import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setLanguage } from '@libs/stores/common';
import i18n from '@libs/i18n';

const useLanguageToggleButton = () => {
  const selectedLang = useAppSelector((state) => state.common.language);
  const dispatch = useAppDispatch();

  const langList = [
    {
      lable: 'KO',
      value: 'ko',
    },
    {
      lable: 'EN',
      value: 'en',
    },
    {
      lable: 'CN',
      value: 'cn',
    },
  ];
  const [isShowLangList, setIsShowLangList] = useState(false);

  useEffect(() => {
    dispatch(setLanguage(i18n.language));
  }, [dispatch]);

  type Language = string;

  const handleSetSelectedLang = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  return {
    selectedLang,
    dispatch,
    langList,
    isShowLangList,
    setIsShowLangList,
    handleSetSelectedLang,
  };
};

export default useLanguageToggleButton;
