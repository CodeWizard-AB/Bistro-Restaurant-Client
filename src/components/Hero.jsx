function Hero({ image, content }) {
	return (
		<div
			className="w-full bg-top bg-cover h-[600px]"
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div className="flex items-center justify-center w-full h-full bg-gray-900/40">
				<div className="text-center max-w-screen-sm">
					<h1 className="text-2xl font-semibold text-white lg:text-3xl mb-6">
						{content}
					</h1>
				</div>
			</div>
		</div>
	);
}

export default Hero;
