import styles from "./About.module.css";

// This is largely temporary until the approach with the header is decided
export default function AboutHero() {
	return (
		<div className={styles.aboutHero}>
			<h1 className={styles.aboutH1}>About the brains</h1>
			<h3 className={styles.aboutH3}>
				Who we are, what we do, why we are, where we do
			</h3>
		</div>
	);
}
