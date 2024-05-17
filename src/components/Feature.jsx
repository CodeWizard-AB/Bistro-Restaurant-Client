import feature from "../assets/home/featured.jpg";
import ButtonContainer from "./Button";
import Heading from "./Heading";

function Feature() {
	return (
		<div
			className="w-full bg-top bg-cover md:h-[800px] mb-24 bg-fixed"
			style={{
				backgroundImage: `url(${feature})`,
			}}
		>
			<div className="w-full h-full bg-gray-900/50 grid place-items-center">
				<div>
					<Heading>
						<p>---Check it out---</p>
						<p className="text-white">FROM OUR MENU</p>
					</Heading>
					<div className="max-w-screen-xl items-center mt-20 px-10 grid md:grid-cols-2 mx-auto gap-10">
						<img src={feature} />
						<div>
							<div className="text-white">
								<p>March 20, 2023</p>
								<p className="my-3"> WHERE CAN I GET SOME?</p>
								<p className="mb-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
									voluptate facere, deserunt dolores maiores quod nobis quas
									quasi. Eaque repellat recusandae ad laudantium tempore
									consequatur consequuntur omnis ullam maxime tenetur.
								</p>
							</div>
							<ButtonContainer variant={"contained"}>Read more</ButtonContainer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feature;
