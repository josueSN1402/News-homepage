import AppStyles from '../scss/layout/App.module.scss';
import { Header } from './layout/Header';
import { Main } from './layout/Main';

function App() {
  return (
    <div className={AppStyles.AppContainer}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
