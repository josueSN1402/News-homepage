import MainNewsStyles from '../scss/components/MainNews.module.scss';
import AsideNewsStyles from '../scss/components/AsideNews.module.scss';

function PrimaryArticle(props) {
  return (
    <div className={MainNewsStyles.PrimaryArticle}>
      <picture className={MainNewsStyles.BannerContainer}>
        <source srcSet={props.bannerDesktop} media='(min-width: 950px)' />
        <img
          src={props.bannerMobile}
          className={MainNewsStyles.Banner}
          alt=''
          width='730'
          height='330'
        />
      </picture>
      <h1 className={MainNewsStyles.Title} tabIndex={0}>
        {props.title}
      </h1>
      <div className={MainNewsStyles.ArticleBody}>
        <a href='/' className={MainNewsStyles.ArticleText} tabIndex={0}>
          {props.content}
        </a>
        <button className={MainNewsStyles.ArticleButton}>READ MORE</button>
      </div>
    </div>
  );
}

function NewNews(props) {
  return (
    <article
      className={`${AsideNewsStyles.NewArticle} ${
        !!props.first ? `${AsideNewsStyles.NoBorder}` : ''
      }`}
    >
      <a href='/' className={AsideNewsStyles.Title}>
        {props.title}
      </a>
      <a href='/' className={AsideNewsStyles.Content} tabIndex={0}>
        {props.content}
      </a>
    </article>
  );
}

function AsideNews() {
  return (
    <aside className={AsideNewsStyles.NewsAside}>
      <h2 href='/' className={AsideNewsStyles.AsideTitle}>
        News
      </h2>
      <NewNews
        title='Hydrogen VS Electric Cars'
        content='Will hydrogen-fueled cars ever catch up to EVs?'
        first={true}
      />
      <NewNews
        title='The Downsides of AI Artistry'
        content='What are the possible adverse effects of on-demand AI image generation?'
      />
      <NewNews
        title='Is VC Funding Drying Up?'
        content='Private funding by VS firms is down 50% YOY. We take a look at what that means.'
      />
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

export default MainNews;
