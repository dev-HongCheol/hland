import { Paper } from '@mui/material';

type BannerCarouselProps = {
  url: string;
};

const Banner = ({ url }: BannerCarouselProps) => {
  return (
    <Paper
      sx={{
        height: '400px',
        background: `url(${import.meta.env.VITE_SERVER_DOMAIN}${url}) center center`,
      }}
    ></Paper>
  );
};

export default Banner;
