import React from "react";

import styles from "./About.module.css";
import AboutHero from "./AboutHero";
import Tabs from "./Tabs";
import AboutApp from "./tabContent/AboutApp";
import AboutTeam from "./tabContent/AboutTeam";

function About() {
	return (
		<div className={styles.wrapper}>
			<div>
				<AboutHero />
				<Tabs
					tabs={[
						{ displayName: "About the app", content: <AboutApp /> },
						{
							displayName: "About the team",
							content: <AboutTeam />,
						},
					]}
				/>
			</div>
		</div>
	);
}

export default About;
