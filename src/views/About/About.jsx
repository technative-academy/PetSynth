import React from "react";

import styles from "./About.module.css";
import AboutHero from "./AboutHero";
import Tabs from "./Tabs";
import AboutApp from "./tabContent/AboutApp";
import AboutTeam from "./tabContent/AboutTeam";

function About() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.aboutWrapper}>
				{/* AboutHero surplus to requirements after header-page title refactor* - cg/}
				{/* <AboutHero /> */}
				<div className={styles.aboutContentBox}>
					<Tabs
						tabs={[
							{
								displayName: "About the app",
								content: <AboutApp />,
							},
							{
								displayName: "About the team",
								content: <AboutTeam />,
							},
						]}
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
