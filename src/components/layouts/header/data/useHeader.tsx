import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useIdToken } from "react-firebase-hooks/auth";
import _ from "lodash-es";

const useHeader = () => {
  const auth = getAuth();
  // const [user, loading, error] = useIdToken(auth);
  const [user] = useIdToken(auth);

  const categoriesHeight = 30;
  const defaultHeaderHeight = 128;
  const [headerInfo, setHedaerInfo] = useState({
    height: defaultHeaderHeight,
    isDense: false,
  });

  const windowScroll = () => {
    const scrolly = window.scrollY;
    console.log(scrolly);
    const newHeaderInfo = _.cloneDeep(headerInfo);
    const contentEle: HTMLDivElement | null =
      document.querySelector("#content");
    if (!contentEle) return;

    if (scrolly > headerInfo.height / 2) {
      newHeaderInfo.isDense = true;
      newHeaderInfo.height = defaultHeaderHeight / 2;
      contentEle.style.paddingTop = `${headerInfo.height / 2}px`;
    } else {
      newHeaderInfo.isDense = false;
      newHeaderInfo.height = defaultHeaderHeight;
      contentEle.style.paddingTop = "0";
    }
    setHedaerInfo(newHeaderInfo);

    console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    return () => window.removeEventListener("scroll", windowScroll);
  }, []);

  return { headerInfo, categoriesHeight, user };
};

export default useHeader;
