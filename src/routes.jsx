import React from "react";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

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
