import { Parallax } from "react-parallax";

function Hero({ image, children, banner }) {
	return (
		<Parallax
			blur={{ min: -15, max: 15 }}
			bgImage={image}
			bgImageAlt="the dog"
			strength={-200}
		>
			<div className="w-full h-[720px]">
				<div className="flex items-center justify-center w-full h-full bg-gray-900/40">
					<div
						className={`text-center first:*:uppercase first:*:text-5xl first:*:mb-5 text-white ${
							banner
								? "first:*:text-7xl last:*:text-2xl px-96 py-36"
								: "first:*:text-5xl px-32 py-24"
						}`}
						style={{ background: "rgba(21, 21, 21, 0.6)" }}
					>
						{children}
					</div>
				</div>
			</div>
		</Parallax>
	);
}

export default Hero;
