import React from "react";

import styles from "./SiteFooter.module.css";

const TOS_URL = "/legal/tos/";

function SiteFooter() {
	return (
		<footer className={styles.wrapper}>
			<div className={styles.legal}>
				<a
					href={TOS_URL}
					className={`${styles.legalItem} ${styles.short}`}
				>
					T &amp; Cs
				</a>
				<a
					href={TOS_URL}
					className={`${styles.legalItem} ${styles.full}`}
				>
					Terms and Conditions
				</a>
				<a href="/legal/cookies/" className={styles.legalItem}>
					Cookies
				</a>
			</div>
			<span className={styles.copyright}>&copy; 2024</span>
		</footer>
	);
}

export default SiteFooter;
