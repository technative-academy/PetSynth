import React from "react";

import styles from "./Shop.module.css";

function Shop() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.productcontainer}>
				<div className={styles.inputcontainer}>
					<input
						placeholder="Search products..."
						className={styles.input}
					></input>
					<button className={styles.btn}>Search</button>
				</div>
			</div>
		</div>
	);
}

export default Shop;
