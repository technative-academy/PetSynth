import React from "react";
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
	const dispatch = useDispatch();

	const results = useSelector((state) => {
		return state.ask.responses;
	});
	return (
		<>
			{results && (
				<div className={styles.resultslist}>
					<h3 className={styles.resultsheading}>Results</h3>
					{results.map((result, index) => (
						<ResultItem
							key={`${result.title}-${index}`}
							{...result}
						/>
					))}

					<button
						type="button"
						onClick={handleShowMore}
						className={styles.showmorebtn}
					>
						Show more
					</button>
				</div>
			)}
		</>
	);

	function handleShowMore() {
		dispatch(fetchResponses(null));
	}
}

export default AskResults;
