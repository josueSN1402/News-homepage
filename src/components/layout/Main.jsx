// import MainStyles from '../../scss/layout/Main.module.scss';
import BannerDesktop from '../../assets/images/image-web-3-desktop.jpg';
import BannerMobile from '../../assets/images/image-web-3-mobile.jpg';
import { MainNews } from '../MainNews';
import { PopularsNews } from '../PopularsNews';

function Main() {
	return (
		<main>
			<MainNews
				bannerDesktop={BannerDesktop}
				bannerMobile={BannerMobile}
			/>
			<PopularsNews />
		</main>
	);
}

export { Main };