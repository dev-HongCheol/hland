import i18n from '@libs/i18n';
import { Box, Grid, Link, styled } from '@mui/material';
import useLanguageToggleButton from './data/useLanguageToggleButton';

type HeaderStyleProps = {
  isHeaderDense: boolean;
};

const SelectedLangLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isHeaderDense',
})((props: HeaderStyleProps) => ({
  color: `${props.isHeaderDense ? '#fff' : '#333'} !important`,
}));

const LangLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isHeaderDense',
})((props: HeaderStyleProps) => ({
  color: `${props.isHeaderDense ? '#fff' : '#333'} !important`,
  padding: '6px',
  margin: '0 2px',
  fontSize: '12px',
  borderRadius: '100%',
  fontWeight: 'bold',
  border: `${props.isHeaderDense ? '#000 2px solid' : 'none'} !important`,
  boxSizing: 'content-box',
  '&:hover': {
    background: `${props.isHeaderDense ? '#fff' : '#333'} !important`,
    color: `${props.isHeaderDense ? '#333' : '#fff'} !important`,
    cursor: 'pointer',
  },
}));

const LangListBox = styled(Box)({
  transition: 'width 0.6s ease',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'clip',
});

const LanguageToggleButton = ({ isHeaderDense }: HeaderStyleProps) => {
  const { selectedLang, langList, isShowLangList, setIsShowLangList, handleSetSelectedLang } =
    useLanguageToggleButton();

  return (
    <Grid container justifyContent={'end'} alignItems={'center'}>
      <Grid
        item
        sx={{
          cursor: 'pointer',
          color: `${isHeaderDense ? '#fff' : '#333'} !important`,
          border: '2px solid',
          borderColor: `${isHeaderDense ? '#fff' : '#333'} !important`,
          borderRadius: '100%',
          fontSize: '12px',
          textAlign: 'center',
          padding: '4px',
          marginRight: '4px',
          fontWeight: 'bold',
        }}
        onClick={() => setIsShowLangList(!isShowLangList)}
      >
        <SelectedLangLink underline="none" isHeaderDense={isHeaderDense}>
          {selectedLang.toUpperCase()}
        </SelectedLangLink>
      </Grid>
      <Grid item>
        <LangListBox
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: isShowLangList ? '145px' : '0px',
            height: '36px',
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
                handleSetSelectedLang(lang.value);
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
