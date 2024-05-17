import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import Heading from "./Heading";

const slider = [slide1, slide2, slide3, slide4, slide5];

function Carousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="lg:px-40 my-20 px-4">
			<Heading>
				<p>---From 11:00am to 10:00pm---</p>
				<p>ORDER ONLINE</p>
			</Heading>
			<div className="slider-container">
				<Slider {...settings}>
					{slider.map((image, i) => (
						<figure key={i} className="relative px-2">
							<img src={image} className="w-full object-cover h-full" />
							<figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl text-white drop-shadow-lg">
								Hello
							</figcaption>
						</figure>
					))}
				</Slider>
			</div>
		</div>
	);
}

export default Carousel;
