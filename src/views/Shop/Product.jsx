import styles from "./Shop.module.css";

// Individual Product (pet) Component:
function Product({ image, title, description, stars, price }) {
	return (
		<div className={styles.productcard}>
			<li className={styles.productitem}>
				<img
					src={`https://project-2.technative.dev.f90.co.uk${image}`}
					className={styles.productImg}
				/>
				<p className={styles.animalname}>{title}</p>
				<p class Name={styles.petdesc}>
					{description}
				</p>
				<p>{stars}</p>
				<p>{price}</p>
			</li>
		</div>
	);
}

export default Product;
