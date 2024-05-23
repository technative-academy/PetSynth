import styles from "./About.module.css";

// This is largely temporary until the approach with the header is decided
export default function AboutHero() {
	return (
		<div className={styles.aboutHero}>
			<h1 className={styles.aboutH1}>About PetSynth AI</h1>
			<h3 className={styles.aboutH3}>
				We make companions, and money, using your info, you paid to give
				us!
			</h3>
		</div>
	);
}
