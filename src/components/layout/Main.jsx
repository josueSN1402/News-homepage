import { lazy, Suspense } from 'react';
import BannerDesktop from '../../assets/images/image-web-3-desktop.webp';
import BannerMobile from '../../assets/images/image-web-3-mobile.webp';
// import { MainNews } from '../MainNews';
// import { PopularNews } from '../PopularNews';

const MainNews = lazy(() => import('../MainNews'));
const PopularNews = lazy(() => import('../PopularNews'));

function Main() {
  return (
    <main>
      <MainNews bannerDesktop={BannerDesktop} bannerMobile={BannerMobile} />
      <PopularNews />
    </main>
  );
}

export default Main;
