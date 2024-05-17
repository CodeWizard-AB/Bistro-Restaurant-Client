import Carousel from "../components/Carousel";
import Feature from "../components/Feature";
import PopularMenu from "../components/PopularMenu";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet";

function Home() {
	return (
		<div>
			<Helmet>
				<title>Home Page</title>
			</Helmet>
			<Slider />
			<div className="lg:px-40 px-6 *:mb-24">
				<Carousel />
				<PopularMenu />
			</div>
			<Feature />
			<Testimonials />
		</div>
	);
}

export default Home;
