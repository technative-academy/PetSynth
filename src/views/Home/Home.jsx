import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchResponses } from "../../store";
import styles from "./Home.module.css";

function Home() {
	/*
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchResponses());
	}, []);
	*/
	return (
		<div className={styles.wrapper}>
			<div className={styles.contentBoxOne}>
				<h1> AI Pet Providers</h1>
				<h3>
					Pet generation service to find your puurfect virtual
					customised companion
				</h3>
			</div>
			<div className={styles.primaryContentContainer}>
				<div className={styles.contentBoxTwo}>
					<h2>
						We make friends for you
						<span className={styles.purpleH2}>
							{" "}
							with AI-magination.
						</span>
					</h2>
					<p>
						Our <span className={styles.purpleP}>PetSynth </span>can
						find your pawfectly personalized, programmed, partner.
						Then you can download and have your own friend to play
						and interact with at any time, anywhere, with our
						dedicated mobile app (app due Footembar 2099).
					</p>
				</div>
				<div className={styles.contentBoxThree}>
					<img
						className={styles.homeIll}
						src="/img/home_ill.jpg"
						alt="Man with Computer"
					/>
				</div>
				<div className={styles.contentBoxFour}>
					<h4>
						Provide a short, but detailed question or description of
						your personality and pet requirements to see some
						suggestions from our specially trained
						<span className={styles.purpleP}> PetSynth </span>.
					</h4>
					<button className={styles.Ask}>Ask PetSynth</button>
				</div>

				<div className={styles.contentBoxFive}>
					<h4>
						In a rush? Need inspiration? Then visit our shop and
						browse a range of pre-generated companions we've come up
						with by extracting popular characteristics.
					</h4>
					<button className={styles.Visit}>Visit our shop</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
