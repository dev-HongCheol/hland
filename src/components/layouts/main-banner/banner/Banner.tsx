import { Paper } from '@mui/material';

type BannerCarouselProps = {
  url: string;
};

const Banner = ({ url }: BannerCarouselProps) => {
  return (
    <Paper
      sx={{
        height: '400px',
        background: `url(${url}) center center`,
      }}
    ></Paper>
  );
};

export default Banner;
