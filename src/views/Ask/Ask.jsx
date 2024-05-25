import React from "react";

import styles from "./Ask.module.css";
import AskForm from "./AskForm";
import AskResults from "./AskResults";

function Ask() {
	return (
		<div className={styles.wrapper}>
			{/* Hero container content needs to overlap header */}
			{/* Below jsx is surplus after header-title refactor - cg */}
			{/* <div className={styles.herocontainer}>
				<h1 className={styles.h1}>Ask PetSynth</h1>
				<p className={styles.herodesc}>
					Post an open-ended question here and see some suggestions
					from our specially trained PetSynth AI...
				</p>
			</div> */}
			<AskForm />
			<AskResults />
		</div>
	);
}

export default Ask;
