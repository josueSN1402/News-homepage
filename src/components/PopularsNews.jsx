import MainStyles from '../scss/layout/Main.module.scss';

function PopularArticle() {
	return(
		<section className={MainStyles.PopularsContainer}>
			<p>d</p>
		</section>
	);
}

function PopularsNews() {
	return(
		<section className={MainStyles.PopularsContainer}>
			<PopularArticle />
			<PopularArticle />
			<PopularArticle />
		</section>
	);
}

export { PopularsNews };