import { lazy, Suspense } from 'react';
import AppStyles from '../scss/layout/App.module.scss';

const Header = lazy(() => import('./layout/Header'));
const Main = lazy(() => import('./layout/Main'));

const renderLoader = () => <p>Loading</p>;

function App() {
  return (
    <div className={AppStyles.AppContainer}>
      <Header />
      <Suspense fallback={renderLoader()}>
        <Main />
      </Suspense>
    </div>
  );
}

export default App;
