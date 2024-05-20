import menuBanner from "../assets/menu/banner3.jpg";
import Hero from "../components/Hero";
import MenuItems from "../components/MenuItems";
import useMenu from "../hooks/useMenu";
import salad from "../assets/menu/salad-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";
import pizza from "../assets/menu/pizza-bg.jpg";
import dessert from "../assets/menu/dessert-bg.jpeg";
import Helmet from "react-helmet";

function Menu() {
	return (
		<div>
			<Helmet>
				<title>TastyTap | Menu</title>
			</Helmet>
			<Hero image={menuBanner} banner={true}>
				<h2>our menu</h2>
				<p>would you like to try a dish</p>
			</Hero>
			<MenuItems data={useMenu("offered").data} />
			<MenuItems data={useMenu("dessert").data} image={dessert}>
				<p>Desserts</p>
			</MenuItems>
			<MenuItems data={useMenu("pizza").data} image={pizza}>
				<p>Pizza</p>
			</MenuItems>
			<MenuItems data={useMenu("salad").data} image={salad}>
				<p>Salads</p>
			</MenuItems>
			<MenuItems data={useMenu("soup").data} image={soup}>
				<p>soups</p>
			</MenuItems>
		</div>
	);
}

export default Menu;
