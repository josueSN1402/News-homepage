import MainStyles from '../scss/layout/Main.module.scss';


function PrimaryArticle(props) {
	return (
		<div className={MainStyles.PrimaryArticle}>
			<picture className={MainStyles.BannerContainer}>
				<source srcSet={props.bannerDesktop} media='(min-width: 600px)' />
				<img src={props.bannerMobile} alt="Banner" className={MainStyles.Banner} />
			</picture>
			<h1 className={MainStyles.Title}>{props.title}</h1>
			<div className={MainStyles.ArticleBody}>
				<p className={MainStyles.ArticleText}>
					{props.content}
				</p>
				<button className={MainStyles.ArticleButton}>READ MORE</button>
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
		<aside className={MainStyles.NewsArticles}>
			<h2>News</h2>
			<NewNews />
		</aside>
	);
}

function MainNews(props) {
	return (
		<section className={MainStyles.NewsContainer}>
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