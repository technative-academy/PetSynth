import React from "react";

import MainContent from "../components/MainContent/MainContent";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import SiteNav from "../components/SiteNav/SiteNav";
import styles from "./Root.module.css";

function Root() {
	return (
		<div className={styles.wrapper}>
			<SiteHeader />
			<SiteNav />
			<MainContent />
			<SiteFooter />
		</div>
	);
}

export default Root;
