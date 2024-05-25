import React from "react";
import { useLocation } from "react-router-dom";

import SiteNav from "../SiteNav/SiteNav";
import styles from "./SiteHeader.module.css";

function SiteHeader() {
	const location = useLocation();

	console.log(location.pathname);

	const getHero = () => {
		switch (location.pathname) {
			case "/":
				return (
					<div className={styles.viewHero}>
						<h1> AI Pet Providers</h1>
						<h3>
							Pet generation service to find your puurfect virtual
							customised companion
						</h3>
					</div>
				);
			case "/ask":
				return (
					<div className={styles.viewHero}>
						<h1>Ask PetSynth</h1>
						<h3>
							Post an open-ended question here and see some
							suggestions from our specially trained PetSynth
							AI...
						</h3>
					</div>
				);
			case "/about":
				return (
					<div className={styles.viewHero}>
						<h1>About PetSynth AI</h1>
						<h3>
							We make companions, and money, using your info, you
							paid to give us!
						</h3>
					</div>
				);
			case "/shop":
				return (
					<div className={styles.viewHero}>
						<h1>Buy the Pets</h1>
						<h3>
							We need to sell as many pets as possible to keep
							PetSynth operating. Take your pick below!
						</h3>
					</div>
				);
			default:
				return "Hi, here is your AI Cooking Assistant";
		}
	};

	return (
		<header className={styles.wrapper}>
			<SiteNav className={styles.siteNav} />
			{getHero()}
		</header>
	);
}

export default SiteHeader;
