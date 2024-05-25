import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu/BurgerMenu";
import styles from "./SiteNav.module.css";

function SiteNav() {
	const navLinks = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "/about" },
		{ label: "Ask", url: "/ask" },
		{ label: "Shop", url: "/shop" },
	];

	const [burgerOpen, setBurgerOpen] = useState(false);

	// is it a 'mobile' device screen width
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	const toggleBurger = () => {
		setBurgerOpen(!burgerOpen);
	};

	//conditional change of burger state depending on resize of the screen
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
			if (window.innerWidth > 768) {
				setBurgerOpen(false);
			}
		};

		// Call handleResize initially to set the state based on the current window size
		window.addEventListener("resize", handleResize);
		handleResize();

		//remove listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	//logic to display different format nav menu for mobile, to desktop, but also auto revert menu display style upon resize to larger
	const getNavDisplay = () => {
		if (isMobile) {
			return burgerOpen ? "inline-flex" : "none";
		} else {
			return "flex";
		}
	};

	return (
		<div className={styles.wrapper}>
			<Link to="/" className={styles.logoLink}>
				<h2 className={styles.logo}>Petsynth</h2>
			</Link>
			<nav
				className={styles.links}
				style={{
					display: getNavDisplay(),
				}}
			>
				{navLinks.map((navLink) => (
					<NavLink
						key={navLink.url}
						to={navLink.url}
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.inactiveLink
						}
					>
						{navLink.label}
					</NavLink>
				))}
			</nav>
			<div className={styles.navBurgerMenu} onClick={toggleBurger}>
				<BurgerMenu isOpen={burgerOpen} />
			</div>
		</div>
	);
}

export default SiteNav;
