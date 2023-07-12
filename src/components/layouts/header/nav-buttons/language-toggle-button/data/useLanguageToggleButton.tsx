import { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/store";
import { commonSlice } from ".";

const useLanguageToggleButton = () => {
  const selectedLang = useAppSelector((state) => state.common.language);
  const dispatch = useAppDispatch();

  const langList = [
    {
      lable: "KO",
      value: "ko",
    },
    {
      lable: "EN",
      value: "en",
    },
    {
      lable: "CN",
      value: "cn",
    },
  ];
  const [isShowLangList, setIsShowLangList] = useState(false);

  type Language = string;

  const handleSetSelectedLang = (lang: Language) => {
    dispatch(commonSlice.actions.setLanguage(lang));
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
