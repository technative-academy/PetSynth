import styles from "./BurgerMenu.module.css";

export default function BurgerMenu({ isOpen }) {
	return (
		<>
			<div className={styles.hamburger}>
				<div
					className={styles.burger}
					//animation of the burger 'bars'
					style={{
						transform: isOpen ? "rotate(45deg)" : "rotate(0)",
					}}
				/>
				<div
					className={styles.burger}
					style={{
						transform: isOpen
							? "translateX(100%)"
							: "translateX(0)",
						opacity: isOpen ? 0 : 1,
					}}
				/>
				<div
					className={styles.burger}
					style={{
						transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
					}}
				/>
			</div>
		</>
	);
}
