import React, { useMemo } from "react";
import { useState } from "react";

import styles from "./Ask.module.css";

const AskForm = () => {
	const [questionInput, setQuestionInput] = useState("");
	const charRemaining = useMemo(() => {
		return 160 - questionInput.length;
	}, [questionInput]);

	return (
		<div className={styles.askcontainer}>
			<p className={styles.title}>Ask your question</p>
			<form>
				<input
					role="searchbox"
					placeholder="Type your question here..."
					className={styles.input}
					value={questionInput}
					onChange={handleChange}
				></input>
				<div className={styles.btncontainer}>
					<button type="submit" className={styles.askbtn}>
						Ask PetSynth
					</button>
					<p className={styles.characters}>
						<span
							className={
								charRemaining >= 0
									? styles.posNumber
									: styles.negNumber
							}
						>
							{`${charRemaining} `}
							characters remaining
						</span>
					</p>
				</div>
			</form>
		</div>
	);

	function handleChange(event) {
		setQuestionInput((prev) => event.target.value);
	}
};

export default AskForm;
