import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../store";
import Product from "./Product";
import styles from "./ProductResults.module.css";

const PRODUCTS_PER_PAGE = 2;
export default function Products({ query }) {
	const dispatch = useDispatch();

	const products = useSelector((state) => state.products.results);
	useEffect(() => {
		dispatch(fetchProducts({ query, "page-size": PRODUCTS_PER_PAGE }));
	}, [query]);

	return (
		<ul className={styles.productList}>
			{products &&
				products.map((product) => (
					<Product key={product.id} {...product} />
				))}
		</ul>
	);
}
