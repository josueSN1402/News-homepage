import { useState } from 'react';
import HeaderStyles from '../../scss/layout/Header.module.scss';
import Logo from '../../assets/images/logo.svg';
import IconMenu from '../../assets/images/icon-menu.svg';
import MobileMenuStyles from '../../scss/components/MobileMenu.module.scss';
import IconClose from '../../assets/images/icon-menu-close.svg';

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
	const [open, setOpen] = useState(false);

	function MobileMenu(status) {
		const [statusValue, setStatusValue] = useState(open);

		const close = () => {
			setStatusValue(!statusValue);
			setTimeout(() => setOpen(!open), 301);
		}

		return (
			<div
				className={
					`${MobileMenuStyles.MobileMenuContainer}${statusValue ? ` ${MobileMenuStyles.Open}` : ` ${MobileMenuStyles.Close}`}`
				}
			>
				<div className={MobileMenuStyles.MobileMenu}>
					<img
						src={IconClose}
						alt='Close'
						className={MobileMenuStyles.IconClose}
						onClick={close}
					/>
				</div>
			</div>
		);
	}

	return (
		<>
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
						onClick={()=> setOpen(!open)}
					/>
				</nav>
			</header>
			{open && <MobileMenu status={open} />}
		</>
	);
}

export { Header };