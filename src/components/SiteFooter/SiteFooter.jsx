import React from "react";

import styles from "./SiteFooter.module.css";

function SiteFooter() {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.termsAndCookies}>
				<span className={`${styles.terms} ${styles.short}`}>
					T &amp; Cs
				</span>
				<span className={`${styles.terms} ${styles.full}`}>
					Terms and Conditions
				</span>
			</div>
			<span className={styles.copyright}>&copy; 2024</span>
		</footer>
	);
}

export default SiteFooter;
