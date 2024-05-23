import React, { useState } from "react";

import styles from "./Shop.module.css";

// Search input component function
function SearchInput({ onSubmit }) {
	const [queryInput, setQueryInput] = useState("");

	return (
		<form className={styles.productcontainer} onSubmit={handleSubmit}>
			<input
				placeholder="Search products..."
				role="searchbox"
				className={styles.input}
				value={queryInput}
				onChange={handleChange}
			></input>
			<div className={styles.btncontainer}>
				<button type="submit" className={styles.searchbtn}>
					Search
				</button>
			</div>
		</form>
	);

	function handleChange(e) {
		setQueryInput(e.target.value);
	}
	function handleSubmit(e) {
		e.preventDefault();
		onSubmit(queryInput);
	}
}

export default SearchInput;
