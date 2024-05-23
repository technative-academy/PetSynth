import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import testData from "./testData.json";

import { fetchProducts } from "../../store";
import Product from "./Product";
import Search from "./Search";
import styles from "./Shop.module.css";

function Shop() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts({ query: "", "page-size": 1 }));
		setTimeout(() => {
			dispatch(fetchProducts(null));
		}, 2000);
	}, [dispatch]);

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
