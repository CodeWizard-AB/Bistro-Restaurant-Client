import Hero from "../components/Hero";
import shop from "../assets/shop/banner2.jpg";
import ShopTabs from "../components/ShopTabs";

function Shop() {
	return (
		<div>
			<Hero banner={true} image={shop}>
				<p>our shop</p>
				<p>would you like to try a dish</p>
			</Hero>
			<ShopTabs />
		</div>
	);
}

export default Shop;
