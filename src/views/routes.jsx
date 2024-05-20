import React from "react";

import About from "./About/About";
import Ask from "./Ask/Ask";
import Home from "./Home/Home";
import Root from "./Root";
import Shop from "./Shop/Shop";

const routes = [
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "ask",
				element: <Ask />,
			},
			{
				path: "shop",
				element: <Shop />,
			},
		],
	},
];

export default routes;
