import React from "react";

import SiteNav from "../SiteNav/SiteNav";
import styles from "./SiteHeader.module.css";

function SiteHeader() {
	return (
		<header className={styles.wrapper}>
			<h2 className={styles.logo}>Petsynth</h2>
			<SiteNav className={styles.siteNav} />
		</header>
	);
}

export default SiteHeader;
