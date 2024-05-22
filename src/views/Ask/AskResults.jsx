import React, { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchResponses } from "../../store";
import styles from "./Ask.module.css";

function ResultItem({ title, description }) {
	return (
		<div className={styles.resultsContainer}>
			<h4 className={styles.resultsTitle}>{title}</h4>
			<p className={styles.resultsDesc}>{description}</p>
		</div>
	);
}

function AskResults() {
	const results = useSelector((state) => {
		console.log(state);
		return state.ask.responses;
	});
	return (
		<div>
			<h3>Results</h3>
			{/* {results.map((result) => (
				<ResultItem {...result} />
			))} */}
		</div>
	);
}

export default AskResults;
