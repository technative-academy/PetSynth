import React from "react";

import styles from "./Shop.module.css";

// Search input component function
function SearchInput({ input, setInput }) {
	function handleChange(event) {
		setInput(event.target.value);
	}

	return (
		<div className={styles.productcontainer}>
			<input
				placeholder="Search products..."
				className={styles.input}
			></input>
			<div className={styles.btncontainer}>
				<button className={styles.searchbtn}>Search</button>
			</div>
		</div>
	);
}

export default SearchInput;
