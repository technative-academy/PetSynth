import styles from "./FilterProps.module.css";

// Individual Product (pet) Component:
function Product({ id, title, description, stars, price }) {
	return (
		<div className={styles.productcontainer}>
			<img src={""} className={styles.img} alt={title} />
			<p>{title}</p>
			<p>{description}</p>
			<p>{stars}</p>
			<p>{price}</p>
		</div>
	);
}

export default Product;
