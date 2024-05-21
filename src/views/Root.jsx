import React from "react";

import MainContent from "../components/MainContent/MainContent";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import styles from "./Root.module.css";

function Root() {
	return (
		<div className={styles.wrapper}>
			<SiteHeader />
			<MainContent />
			<SiteFooter />
		</div>
	);
}

export default Root;
