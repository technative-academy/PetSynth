import React, { useState } from "react";

import styles from "./Shop.module.css";

/**
 * [id, displayName]
 */
const SORT_MODES = [
	["title", "title"],
	["price", "price"],
	["rating", "rating"],
];
// Search input component function
function SearchInput({ onSubmit }) {
	const [queryInput, setQueryInput] = useState("");
	const [sortModeInput, setSortModeInput] = useState("");

	return (
		<form className={styles.productcontainer} onSubmit={handleSubmit}>
			<input
				placeholder="Search products..."
				role="searchbox"
				className={styles.input}
				value={queryInput}
				onChange={(e) => setQueryInput(e.target.value)}
			></input>
			<div className={styles.btncontainer}>
				<button type="submit" className={styles.searchbtn}>
					Search
				</button>
			</div>
			<label className={styles.sortby}>
				Sort by
				<select
					value={sortModeInput}
					onChange={(e) => setSortModeInput(e.target.value)}
					className={styles.select}
				>
					{SORT_MODES.map(([id, displayName]) => (
						<option key={id} value={id}>
							{displayName}
						</option>
					))}
				</select>
			</label>
		</form>
	);

	function handleSubmit(e) {
		e.preventDefault();
		onSubmit({ query: queryInput, sortMode: sortModeInput });
	}
}

export default SearchInput;
