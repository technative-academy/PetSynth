import React from "react";

import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Root from "./Root";

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
				path: "projects",
				element: <Projects />,
			},
		],
	},
];

export default routes;
