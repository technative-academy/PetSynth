import React from "react";

import Search from "./Search";
import styles from "./Shop.module.css";

function Shop() {
	return (
		<div className={styles.wrapper}>
			{/* Hero container content needs to overlap header */}
			<div className={styles.herocontainer}>
				<h1>Buy the Pets</h1>
				<p className={styles.herotitle}>
					We need to sell as many pets as possible to keep PetSynth
					operating. Take your pick below!
				</p>
			</div>
			<div className={styles.searchcomponent}>
				<Search />
			</div>
		</div>
	);
}

export default Shop;
