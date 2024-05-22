import React from "react";

import testData from "./testData.json";

import Product from "./Product";
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
				{testData.products.map((product) => (
					<Product {...product} />
				))}
			</div>
		</div>
	);
}

export default Shop;
