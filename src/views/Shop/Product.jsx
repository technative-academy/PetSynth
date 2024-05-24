import styles from "./Shop.module.css";

// Individual Product (pet) Component:
function Product({ image, title, description, stars, price }) {
	return (
		<li className={styles.productcard}>
			<img
				src={`https://project-2.technative.dev.f90.co.uk${image}`}
				className={styles.productImg}
			/>
			<p className={styles.animalname}>{title}</p>
			<p className={styles.petdetails}>{description}</p>
			<p className={styles.petdetails}>{stars} ⭐</p>
			<p className={styles.petdetails}>£{price}</p>
		</li>
	);
}

export default Product;
