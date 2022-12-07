import { lazy, Suspense } from 'react';
import AppStyles from '../scss/layout/App.module.scss';

import { SkeletonTheme } from 'react-loading-skeleton';
import CardSkeleton from './loaders/MainLoader';

const Header = lazy(() => import('./layout/Header'));
const Main = lazy(() => import('./layout/Main'));

function App() {
  return (
    <div className={AppStyles.AppContainer}>
      <Header />
      <Suspense fallback={<CardSkeleton />}>
        <SkeletonTheme baseColor='#d9d9d9'>
          <Main />
        </SkeletonTheme>
      </Suspense>
    </div>
  );
}

export default App;
