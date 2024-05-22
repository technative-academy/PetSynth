import styles from "./Shop.module.css";

// Individual Product (pet) Component:
function Product({ image, title, description, stars, price }) {
	return (
		<div className={styles.productcontainer}>
			<img src={image} className={styles.img} alt={title} width="300px" />
			<p>{title}</p>
			<p>{description}</p>
			<p>{stars}</p>
			<p>{price}</p>
		</div>
	);
}

export default Product;
