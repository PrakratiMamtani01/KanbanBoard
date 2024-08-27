import { RouteObject } from "react-router";
import Layout from "../layout";
import Boards from "../pages/Boards";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

// an array of type RouteObject
const routes: RouteObject[] = [
	{
        // defines the path for the route
		path: "/",
        // specifies the React element to render when the route matches
		element: <Layout />,
		children: [
			{
				children: [
					{
                        // child route's path
						path: "boards",
						element: <Boards />,
					},
					{
						path: "", // New route for the home page
						element: <Home />,
					},
					{
						path: "projects", // New route for the home page
						element: <Projects />,
					},
				],
			},
		],
	},
];

export default routes;