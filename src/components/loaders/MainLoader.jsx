import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import MainLoaderStyles from '../../scss/layout/loaders/MainLoader.module.scss';

const ArticleAside = ({ count }) => {
  const arr = Array(count).fill(1);
  return arr.map((article, i) => (
    <div
      className={MainLoaderStyles.NewArticle}
      key={i}
    >
      <p>
        <Skeleton height={22} />
      </p>
      <p className={MainLoaderStyles.Content}>
        <Skeleton count={2} height={15} />
      </p>
    </div>
  ));
};

const MainLoader = () => {
  return (
    <div className={MainLoaderStyles.NewsContainer}>
      <div className={MainLoaderStyles.PrimaryArticle}>
        <div className={MainLoaderStyles.BannerContainer}>
          <Skeleton className={MainLoaderStyles.Banner} />
        </div>
        <h1 className={MainLoaderStyles.Title}>
          <Skeleton width='90%' />
          <Skeleton />
          <Skeleton width='70%' />
        </h1>
        <div className={MainLoaderStyles.ArticleBody}>
          <p className={MainLoaderStyles.ArticleText}>
            <Skeleton count={4} />
            <Skeleton width='80%' />
          </p>
          <Skeleton className={MainLoaderStyles.ArticleButton} />
        </div>
      </div>
      <div className={MainLoaderStyles.NewsAside}>
        <h2 className={MainLoaderStyles.AsideTitle}>
          <Skeleton width='30%' />
        </h2>
        <ArticleAside count={3} />
      </div>
    </div>
  );
};

export { MainLoader };
