import React, { useEffect } from "react";

import ProductResults from "./ProductResults";
import Search from "./Search";
import styles from "./Shop.module.css";

function Shop() {
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
				<Search />
				<ProductResults query="" />
			</div>
		</div>
	);
}

export default Shop;
