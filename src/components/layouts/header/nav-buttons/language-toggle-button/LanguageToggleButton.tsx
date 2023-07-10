import i18n from "@libs/i18n";
import { Box, Grid, Link, styled } from "@mui/material";
import { useState } from "react";

type HeaderStyleProps = {
  isHeaderDense: boolean;
};

const SelectedLangLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isHeaderDense",
})((props: HeaderStyleProps) => ({
  color: `${props.isHeaderDense ? "#fff" : "#333"} !important`,
}));

const LangLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isHeaderDense",
})((props: HeaderStyleProps) => ({
  color: `${props.isHeaderDense ? "#fff" : "#333"} !important`,
  padding: "6px",
  margin: "0 2px",
  fontSize: "12px",
  borderRadius: "100%",
  fontWeight: "bold",
  border: `${props.isHeaderDense ? "#000 2px solid" : "none"} !important`,
  boxSizing: "content-box",
  "&:hover": {
    background: `${props.isHeaderDense ? "#fff" : "#333"} !important`,
    color: `${props.isHeaderDense ? "#333" : "#fff"} !important`,

    cursor: "pointer",
  },
}));

const LangListBox = styled(Box)({
  transition: "width 0.6s ease",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "clip",
});

const LanguageToggleButton = ({ isHeaderDense }: HeaderStyleProps) => {
  const [selectedLang] = useState("KR");
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
      value: "ko",
    },
  ];
  const [isShowLangList, setIsShowLangList] = useState(false);

  return (
    <Grid container justifyContent={"end"} alignItems={"center"}>
      <Grid
        item
        sx={{
          cursor: "pointer",
          color: `${isHeaderDense ? "#fff" : "#333"} !important`,
          border: "2px solid",
          borderColor: `${isHeaderDense ? "#fff" : "#333"} !important`,
          borderRadius: "100%",
          fontSize: "12px",
          textAlign: "center",
          padding: "3px",
          marginRight: "4px",
        }}
        onClick={() => setIsShowLangList(!isShowLangList)}
      >
        <SelectedLangLink
          underline="none"
          isHeaderDense={isHeaderDense}
          // onClick={}
        >
          {selectedLang}
        </SelectedLangLink>
      </Grid>
      <Grid item>
        <LangListBox
          sx={{
            display: "flex",
            alignItems: "center",
            width: isShowLangList ? "145px" : "0px",
            height: "36px",
          }}
        >
          {langList.map((lang) => (
            <LangLink
              key={lang.value}
              fontSize={12}
              underline="none"
              isHeaderDense={isHeaderDense}
              onClick={() => {
                i18n.changeLanguage(lang.value);
                setIsShowLangList(!isShowLangList);
              }}
            >
              {lang.lable}
            </LangLink>
          ))}
        </LangListBox>
      </Grid>
    </Grid>
  );
};

export default LanguageToggleButton;
