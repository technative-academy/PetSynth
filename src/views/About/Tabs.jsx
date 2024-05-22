import { useState } from "react";

import styles from "./Tabs.module.css";

export default function Tabs({ tabs }) {
	const [selectedTabIndex, setSelectedTabIndex] = useState(0);

	return (
		<section className={styles.wrapper}>
			<div className={styles.tabButtonContainer}>
				<div>
					{tabs.map(({ displayName }, index) => (
						<button
							key={index}
							type="button"
							className={styles.tabButton}
							disabled={index === selectedTabIndex}
							onClick={() => handleTabButtonClick(index)}
						>
							{displayName}
						</button>
					))}
				</div>
			</div>
			{tabs[selectedTabIndex].content}
		</section>
	);

	function handleTabButtonClick(index) {
		setSelectedTabIndex(index);
	}
}
