import Carousel from 'react-material-ui-carousel';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Banner } from './banner';

const banners = [
  {
    index: 1,
    url: '/images/banner1.jpeg',
  },
  {
    index: 2,
    url: '/images/banner2.jpeg',
  },
];

const MainBanner = () => {
  return (
    <Carousel
      autoPlay
      cycleNavigation
      navButtonsAlwaysVisible
      indicators={false}
      navButtonsProps={{
        style: {
          backgroundColor: 'transparent',
          borderRadius: '0px',
          border: '3px solid',
        },
      }}
      NextIcon={<EastIcon />}
      PrevIcon={<WestIcon />}
    >
      {banners.map((banner) => (
        <Banner key={banner.url} url={banner.url} />
      ))}
    </Carousel>
  );
};

export default MainBanner;
