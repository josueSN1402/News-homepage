import { lazy, Suspense } from 'react';
import AppStyles from '../scss/layout/App.module.scss';

import { SkeletonTheme } from 'react-loading-skeleton';
import { HeaderLoader } from './loaders/HeaderLoader';
import { MainLoader } from './loaders/MainLoader';

const Header = lazy(() => import('./layout/Header'));
const Main = lazy(() => import('./layout/Main'));

function App() {
  return (
    <div className={AppStyles.AppContainer}>
      <Suspense fallback={<HeaderLoader />}>
        <SkeletonTheme baseColor='#d9d9d9'>
          <Header />
        </SkeletonTheme>
      </Suspense>
      <Suspense fallback={<MainLoader />}>
        <SkeletonTheme baseColor='#d9d9d9'>
          <Main />
        </SkeletonTheme>
      </Suspense>
    </div>
  );
}

export default App;
