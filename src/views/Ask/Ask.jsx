import React from "react";

import styles from "./Ask.module.css";

function Ask() {
	return (
		<div className={styles.wrapper}>
			{/* Hero container content needs to overlap header */}
			<div className={styles.herocontainer}>
				<h1>Ask PetSynth</h1>
				<p className={styles.herotitle}>
					Post an open-ended question here and see some suggestions
					from our specially trained PetSynth AI...
				</p>
			</div>
			<div className={styles.askcontainer}>
				<p className={styles.title}>Ask your question</p>
				<input
					placeholder="Type your question here..."
					className={styles.input}
				></input>
				<div className={styles.btncontainer}>
					<button className={styles.askbtn}>Ask PetSynth</button>
					<p className={styles.characters}>
						160 characters remaining
					</p>
				</div>
			</div>
			{/* Div container and extra buttonneeded here for Results content */}
		</div>
	);
}

export default Ask;
