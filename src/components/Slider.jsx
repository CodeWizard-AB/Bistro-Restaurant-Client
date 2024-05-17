import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slider1 from "../assets/home/01.jpg";
import slider2 from "../assets/home/02.jpg";
import slider3 from "../assets/home/03.png";
import slider4 from "../assets/home/04.jpg";
import slider5 from "../assets/home/05.png";
import slider6 from "../assets/home/06.png";

const sliders = [slider1, slider2, slider3, slider4, slider5, slider6];

function Slider() {
	return (
		<Carousel
			showArrows={false}
			showStatus={false}
			autoPlay={true}
			infiniteLoop={true}
		>
			{sliders.map((image, i) => (
				<figure key={i} className="max-h-[calc(100vh-100px)]">
					<img
						src={image}
						alt={`slider image ${i + 1}`}
						className="object-cover"
					/>
				</figure>
			))}
		</Carousel>
	);
}

export default Slider;
