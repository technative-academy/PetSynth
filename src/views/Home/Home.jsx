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
				<h1> Welcome to the brains</h1>
				<h3>
					Welcome to ask the brains, where we answer your questions to
					sell you the perfect virtual pet
				</h3>
			</div>
			<div className={styles.primaryContentContainer}>
				<div className={styles.contentBoxTwo}>
					<h2>We do AI</h2>
					<h2 className={styles.purpleH2}>(via ChatGPT)</h2>
					<p>
						Ask us a question, we'll secretly pass it on to ChatGPT
						and will return the result pretending that we generated
						it ourselves
					</p>
				</div>
				<div className={styles.contentBoxThree}>
					<img
						className={styles.homeIll}
						src="src/views/Home/img/home_ill.png"
						alt="Man with Computer"
					/>
				</div>
				<div className={styles.contentBoxFour}>
					<h4>
						Post an open-ended question and see some suggestions
						from our specially trained AI.
					</h4>
					<button>Ask the brains!</button>
				</div>

				<div className={styles.contentBoxFive}>
					<h4>
						Visit our shop and buy one of our AI generated pets so
						that we can afford to keep going!
					</h4>
					<button>Visit our shop</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
