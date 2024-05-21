import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchResponses } from "../../store";
import styles from "./Home.module.css";

function Home() {
	/*
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchResponses());
	}, []);
	*/
	return (
		<div className={styles.wrapper}>
			<p>Home</p>
		</div>
	);
}

export default Home;
