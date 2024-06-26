import React, { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchResponses } from "../../store";
import styles from "./Ask.module.css";

const AskForm = () => {
	const dispatch = useDispatch();
	const [questionInput, setQuestionInput] = useState("");
	const charRemaining = useMemo(() => {
		return 160 - questionInput.length;
	}, [questionInput]);

	const isLoading = useSelector((state) => {
		return state.ask.pending;
	});

	const submitIsDisabled =
		questionInput.length === 0 || questionInput.length > 160 || isLoading;

	return (
		<div className={styles.askcontainer}>
			<p className={styles.title}>Ask your question</p>
			<form onSubmit={handleSubmit}>
				<input
					role="searchbox"
					placeholder="Type your question here..."
					className={styles.input}
					value={questionInput}
					onChange={handleChange}
				></input>
				<div className={styles.buttonAndRemaining}>
					<div className={styles.buttonContainer}>
						<button
							type="submit"
							className={styles.askbtn}
							disabled={submitIsDisabled}
						>
							{isLoading ? "Loading" : "Ask PetSynth"}
						</button>
						<button
							type="button"
							onClick={handleSuggestClick}
							className={styles.suggestbtn}
						>
							Suggest a Question
						</button>
					</div>
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
		setQuestionInput(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(fetchResponses(questionInput));
	}
	function handleSuggestClick(event) {}
};

export default AskForm;
