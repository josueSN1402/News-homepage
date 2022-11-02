import HeaderStyles from '../../scss/layout/Header.module.scss';
import Logo from '../../assets/images/logo.svg';
import IconMenu from '../../assets/images/icon-menu.svg';

const NavbarItem = ({children}) => {
	return (
		<li>
			<a href='/' className={HeaderStyles.Navbar__items}>
				{children}
			</a>
		</li>
	);
}

function Header() {
	return (
		<header className={HeaderStyles.NewHeader}>
			<a href='/'>
				<img src={Logo} alt="W." className={HeaderStyles.Logo} />
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
					alt="Icon menu"
				/>
			</nav>
		</header>
	);
}

export { Header };