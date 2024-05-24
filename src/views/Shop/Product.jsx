import styles from "./Shop.module.css";

// Individual Product (pet) Component:
function Product({ image, title, description, stars, price }) {
	return (
		<li className={styles.productcontainer}>
			<img
				src={`https://project-2.technative.dev.f90.co.uk${image}`}
				className={styles.productImg}
			/>
			<p>{title}</p>
			<p>{description}</p>
			<p>{stars}</p>
			<p>{price}</p>
		</li>
	);
}

export default Product;
