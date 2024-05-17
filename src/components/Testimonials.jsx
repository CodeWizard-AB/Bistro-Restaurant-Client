import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import Heading from "./Heading";
import comment from "../assets/icon/Vector.svg";
import { Rating } from "@mui/material";

function Testimonials() {
	const { data: testimonials } = useQuery({
		queryKey: ["testimonials"],
		queryFn: () => axios("testimonials.json").then(({ data }) => data),
	});

	let sliderRef = useRef(null);
	const next = () => {
		sliderRef.slickNext();
	};
	const previous = () => {
		sliderRef.slickPrev();
	};
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
	};

	return (
		<div className="lg:px-40 px-6 mb-24">
			<Heading>
				<p>---What Our Clients Say---</p>
				<p>Testimonials</p>
			</Heading>
			<div className="slider-container">
				<Slider
					ref={(slider) => {
						sliderRef = slider;
					}}
					{...settings}
				>
					{testimonials?.map(
						({ name, quote, image, company, position, rating }, i) => (
							<section className="bg-white dark:bg-gray-900" key={i}>
								<div className="container py-10 mx-auto">
									<div className="lg:-mx-6 lg:flex lg:items-center">
										<img
											className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
											src={image}
											alt={name}
										/>

										<div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
											<figure className="flex gap-2 mb-6 items-center pr-12">
												<img src={comment} />
												<img src={comment} />
												<Rating value={rating} readOnly className="ml-auto" />
											</figure>

											<h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
												Help us improve our productivity
											</h1>

											<p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
												“{quote}”
											</p>

											<h3 className="mt-6 text-lg font-medium text-main">
												{name}
											</h3>
											<p className="text-gray-600 dark:text-gray-300">
												{position} at {company}
											</p>

											<div className="flex items-center justify-between mt-12 lg:justify-start">
												<button
													onClick={previous}
													title="left arrow"
													className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-6 h-6"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M15 19l-7-7 7-7"
														/>
													</svg>
												</button>

												<button
													title="right arrow"
													className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
													onClick={next}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-6 h-6"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														strokeWidth="2"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
								</div>
							</section>
						)
					)}
				</Slider>
			</div>
		</div>
	);
}

export default Testimonials;
