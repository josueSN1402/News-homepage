import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import MainNewsStyles from '../../scss/components/MainNews.module.scss';
import AsideNewsStyles from '../../scss/components/AsideNews.module.scss';

import MainLoader from '../../scss/layout/MainLoader.module.scss';

const ArticleAside = ({ count }) => {
  const arr = Array(count).fill(1);
  return arr.map((article, i) => (
    <div
      className={`${AsideNewsStyles.NewArticle} ${AsideNewsStyles.NoBorder}`}
      key={i}
    >
      <p className={AsideNewsStyles.Title}>
        <Skeleton height={22} />
      </p>
      <p className={AsideNewsStyles.Content}>
        <Skeleton count={2} height={15} />
      </p>
    </div>
  ));
};

const CardSkeleton = () => {
  return (
    <div className={MainNewsStyles.NewsContainer}>
      <div className={MainNewsStyles.PrimaryArticle}>
        <div className={MainNewsStyles.BannerContainer}>
          <Skeleton className={MainNewsStyles.Banner} height={330} />
        </div>
        <h1 className={MainNewsStyles.Title}>
          <Skeleton width='90%' />
          <Skeleton />
          <Skeleton width='70%' />
        </h1>
        <div className={MainNewsStyles.ArticleBody}>
          <p className={MainNewsStyles.ArticleText}>
            <Skeleton count={4} />
            <Skeleton width='80%' />
          </p>
          <Skeleton className={MainLoader.ArticleButton} />
        </div>
      </div>
      <div className={MainLoader.NewsAside}>
        <h2 className={AsideNewsStyles.AsideTitle}>
          <Skeleton width='30%' />
        </h2>
        <ArticleAside count={3} />
      </div>
    </div>
  );
};

export default CardSkeleton;
