import { Sling as Hamburger } from "hamburger-react";
// import SimpleDrawer from "../components/Drawer";
import { Link, NavLink } from "react-router-dom";
import { navigation, navButtons } from "../constants";
import ButtonContainer from "./Button";
import { useAuth } from "../contexts/AuthContext";
import Account from "./Account";
import { useState } from "react";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const { user } = useAuth();

	return (
		<header className="px-4 py-6 md:px-14 top-0 z-20 absolute w-full bg-[#15151580] text-white">
			<nav className="flex justify-between lg:text-lg items-center">
				<Link to="/">
					<h1 className="font-display text-4xl font-bold">TastyTap</h1>
				</Link>
				<div className="flex items-center gap-6">
					<ul className="gap-8 hidden lg:flex">
						{navigation.map(({ title, link }, index) => (
							<li key={index}>
								<NavLink
									to={link}
									className={({ isActive }) =>
										isActive ? "text-[#EEFF25]" : null
									}
								>
									{title.toUpperCase()}
								</NavLink>
							</li>
						))}
					</ul>
					{user ? (
						<Account />
					) : (
						<div className="hidden lg:flex gap-4">
							{navButtons?.map(({ title, link }, i) => (
								<Link key={i * 2} to={link}>
									<ButtonContainer
										size="large"
										variant={i === 0 ? "outlined" : "contained"}
										borderCol={i === 0 && "#ced4da"}
									>
										{title}
									</ButtonContainer>
								</Link>
							))}
						</div>
					)}
				</div>
				<div className={`lg:hidden ${user ? "order-first" : "order-last"}`}>
					<Hamburger toggled={isOpen} toggle={setIsOpen} />
					{/* <SimpleDrawer isOpen={isOpen} setIsOpen={setIsOpen} /> */}
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
