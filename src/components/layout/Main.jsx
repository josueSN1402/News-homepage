import MainStyles from '../../scss/layout/Main.module.scss';
import BannerDesktop from '../../assets/images/image-web-3-desktop.jpg';
import BannerMobile from '../../assets/images/image-web-3-mobile.jpg';

function Main() {
	return (
		<main>
			<section className={MainStyles.NewsContainer}>
				<div className={MainStyles.PrimaryArticle}>
					<picture className={MainStyles.BannerContainer}>
						<source srcSet={BannerDesktop} media='(min-width: 600px)' />
						<img src={BannerMobile} alt="Banner" className={MainStyles.Banner} />
					</picture>
					<h1 className={MainStyles.Title}>The Bright Future of Web 3.0?</h1>
					<div className={MainStyles.ArticleBody}>
						<p className={MainStyles.ArticleText}>
							We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
						</p>
						<button className={MainStyles.ArticleButton}>READ MORE</button>
					</div>
				</div>
				<aside className={MainStyles.NewsArticles}>
					<h2>News</h2>
				</aside>
			</section>
			<section className={MainStyles.PopularsContainer}>
				<p>d</p>
				<p>d</p>
				<p>d</p>
			</section>
		</main>
	);
}

export { Main };