import React from "react";

import SiteNav from "../SiteNav/SiteNav";
import styles from "./SiteHeader.module.css";

function SiteHeader() {
	return (
		<header className={styles.wrapper}>
			<SiteNav className={styles.siteNav} />
		</header>
	);
}

export default SiteHeader;
