import React from "react";
import { useSelector } from "react-redux";

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
		return state.ask.responses;
	});
	return (
		<div>
			{results && (
				<>
					<h3 className={styles.resultsTitle}>Results</h3>
					{results.map((result) => (
						<ResultItem key={result.title} {...result} />
					))}
				</>
			)}
		</div>
	);
}

export default AskResults;
