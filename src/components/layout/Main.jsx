import BannerDesktop from '../../assets/images/image-web-3-desktop.jpg';
import BannerMobile from '../../assets/images/image-web-3-mobile.jpg';
import { MainNews } from '../MainNews';
import { PopularNews } from '../PopularNews';

function Main() {
  return (
    <main>
      <MainNews bannerDesktop={BannerDesktop} bannerMobile={BannerMobile} />
      <PopularNews />
    </main>
  );
}

export { Main };
