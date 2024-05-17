import menuBanner from "../assets/menu/banner3.jpg";
import Hero from "../components/Hero";

function Menu() {
	return (
		<div>
			<Hero image={menuBanner} banner={true}>
				<h2>our menu</h2>
				<p>would you like to try a dish</p>
			</Hero>
		</div>
	);
}

export default Menu;
