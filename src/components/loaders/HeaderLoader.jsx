import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import HeaderStyles from '../../scss/layout/Header.module.scss';

import HeaderLoaderStyles from '../../scss/layout/HeaderLoader.module.scss';

const HeaderLoader = () => {
  return (
    <div className={HeaderStyles.NewHeader}>
      <div>
        <Skeleton className={HeaderLoaderStyles.Logo} />
      </div>
      <div className={HeaderStyles.NavbarContianer}>
        <div className={HeaderStyles.Navbar}>
          <Skeleton width={55} height={20} />
          <Skeleton width={50} height={20} />
          <Skeleton width={60} height={20} />
          <Skeleton width={55} height={20} />
          <Skeleton width={80} height={20} />
        </div>
        <Skeleton className={HeaderStyles.IconMenu} width={40} height={25} />
      </div>
    </div>
  );
};

export { HeaderLoader };
