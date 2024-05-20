import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

function App() {
	const { pathname } = useLocation();
	const noHeaderFooter =
		pathname !== "/login" &&
		pathname !== "/signup" &&
		!pathname.includes("dashboard");
	return (
		<div>
			<Toaster />
			{noHeaderFooter && <NavBar />}
			<Outlet />
			{noHeaderFooter && <Footer />}
		</div>
	);
}

export default App;
