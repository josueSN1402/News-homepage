import { useState } from 'react';
import HeaderStyles from '../../scss/layout/Header.module.scss';
import Logo from '../../assets/images/logo.svg';
import IconMenu from '../../assets/images/icon-menu.svg';
import MobileMenuStyles from '../../scss/components/MobileMenu.module.scss';
import IconClose from '../../assets/images/icon-menu-close.svg';

const NavbarItem = ({ mobile = false, children }) => {
  return (
    <li>
      <a
        href='/'
        className={`${HeaderStyles.Navbar__items} ${
          mobile ? `${MobileMenuStyles.Navbar__items}` : ''
        }`}
      >
        {children}
      </a>
    </li>
  );
};

function Header() {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth <= 800);

  function MobileMenu() {
    const [statusValue, setStatusValue] = useState(open && screenWidth);

    const close = () => {
      setStatusValue(!statusValue);
      setTimeout(() => setOpen(!open), 301);
    };
    const selectClass = `${
      statusValue ? ` ${MobileMenuStyles.Open}` : ` ${MobileMenuStyles.Close}`
    }`;

    return (
      <div className={`${MobileMenuStyles.MobileMenuContainer}${selectClass}`}>
        <div className={MobileMenuStyles.MobileMenu}>
          <img
            src={IconClose}
            alt='Close'
            className={MobileMenuStyles.IconClose}
            onClick={close}
          />
          <ul className={MobileMenuStyles.MobileNavbar}>
            <NavbarItem mobile={true}>Home</NavbarItem>
            <NavbarItem mobile={true}>New</NavbarItem>
            <NavbarItem mobile={true}>Popular</NavbarItem>
            <NavbarItem mobile={true}>Trending</NavbarItem>
            <NavbarItem mobile={true}>Categories</NavbarItem>
          </ul>
        </div>
      </div>
    );
  }

  const resize = () => {
    const width = window.innerWidth;
    if (width <= 800) {
      setScreenWidth(true);
    } else {
      setScreenWidth(false);
      setOpen(false);
    }
  };

  window.addEventListener('resize', resize);

  return (
    <>
      <header className={HeaderStyles.NewHeader}>
        <a href='/'>
          <img
          	src={Logo}
          	alt='W.'
          	className={HeaderStyles.Logo}
            width='65'
            height='40'
          />
        </a>
        <nav className={HeaderStyles.NavbarContianer}>
          <ul className={HeaderStyles.Navbar}>
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>New</NavbarItem>
            <NavbarItem>Popular</NavbarItem>
            <NavbarItem>Trending</NavbarItem>
            <NavbarItem>Categories</NavbarItem>
          </ul>
          <img
            src={IconMenu}
            className={HeaderStyles.IconMenu}
            aria-label='Open Menu'
            alt='Icon menu'
            onClick={() => setOpen(!open)}
          />
        </nav>
      </header>
      {open && screenWidth && <MobileMenu />}
    </>
  );
}

export { Header };
