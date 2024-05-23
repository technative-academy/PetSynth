import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../store";
import Product from "./Product";
import styles from "./ProductResults.module.css";

const PRODUCTS_PER_PAGE = 6;
export default function Products({ query, sortMode }) {
	const dispatch = useDispatch();

	const products = useSelector((state) => state.products.results);
	const resultsUUID = useMemo(() => crypto.randomUUID(), [query, sortMode]);
	useEffect(() => {
		dispatch(
			fetchProducts({
				query,
				"page-size": PRODUCTS_PER_PAGE,
				sort: sortMode,
			}),
		);
	}, [query, sortMode]);

	const isLoading = useSelector((state) => state.products.pending);
	const gotAllResults = useSelector((state) => state.products.gotAllResults);

	return (
		<>
			<ul key={resultsUUID} className={styles.productList}>
				{products &&
					products.map((product) => (
						<Product key={product.id} {...product} />
					))}
			</ul>
			{products && !gotAllResults && (
				<button
					type="button"
					onClick={handleShowMoreClick}
					disabled={isLoading}
				>
					Show more
				</button>
			)}
		</>
	);

	function handleShowMoreClick() {
		dispatch(fetchProducts(null));
	}
}
