import MainNewsStyles from '../scss/components/MainNews.module.scss';


function PrimaryArticle(props) {
	return (
		<div className={MainNewsStyles.PrimaryArticle}>
			<picture className={MainNewsStyles.BannerContainer}>
				<source srcSet={props.bannerDesktop} media='(min-width: 600px)' />
				<img src={props.bannerMobile} alt="Banner" className={MainNewsStyles.Banner} />
			</picture>
			<h1 className={MainNewsStyles.Title}>{props.title}</h1>
			<div className={MainNewsStyles.ArticleBody}>
				<p className={MainNewsStyles.ArticleText}>
					{props.content}
				</p>
				<button className={MainNewsStyles.ArticleButton}>READ MORE</button>
			</div>
		</div>
	);
}

function NewNews(props) {
	return (
		<div>
			<h2>News</h2>
		</div>
	);
}

function AsideNews(props) {
	return (
		<aside className={MainNewsStyles.NewsArticles}>
			<h2>News</h2>
			<NewNews />
		</aside>
	);
}

function MainNews(props) {
	return (
		<section className={MainNewsStyles.NewsContainer}>
			<PrimaryArticle
				bannerDesktop={props.bannerDesktop}
				bannerMobile={props.bannerMobile}
				title='The Bright Future of Web 3.0?'
				content='We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?'
			/>
			<AsideNews />
		</section>
	);
}

export { MainNews };