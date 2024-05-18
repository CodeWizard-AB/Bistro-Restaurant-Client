import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Shop from "../pages/Shop";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/menu",
				element: <Menu />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
			{
				path: "/shop/:category",
				element: <Shop />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/signup",
				element: <Signup />,
			},
		],
	},
]);
