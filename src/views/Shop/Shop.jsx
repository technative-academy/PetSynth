import React, { useState } from "react";

import ProductResults from "./ProductResults";
import Search from "./Search";
import styles from "./Shop.module.css";

function Shop() {
	const [activeQuery, setActiveQuery] = useState("");
	const [activeSortMode, setActiveSortMode] = useState(null);

	return (
		<div className={styles.wrapper}>
			<div className={styles.herocontainer}>
				<h1>Buy the Pets</h1>
				<p className={styles.herotitle}>
					We need to sell as many pets as possible to keep PetSynth
					operating. Take your pick below!
				</p>
			</div>
			<div className={styles.searchcomponent}>
				<Search onSubmit={handleSearchSubmit} />
				<ProductResults query={activeQuery} sortMode={activeSortMode} />
			</div>
		</div>
	);

	function handleSearchSubmit({ query, sortMode }) {
		setActiveQuery(query);
		setActiveSortMode(sortMode);
	}
}

export default Shop;
