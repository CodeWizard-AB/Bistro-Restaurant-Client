/* eslint-disable react/no-unescaped-entities */
import ButtonContainer from "./Button";
import Heading from "./Heading";
import Hero from "./Hero";
import MenuItem from "./MenuItem";

function MenuItems({ data, children, image }) {
	return (
		<div>
			{image ? (
				<Hero image={image}>{children}</Hero>
			) : (
				<Heading>
					<p>---Don't miss---</p>
					<p>TODAY'S OFFER</p>
				</Heading>
			)}

			<div className="grid md:grid-cols-2 gap-y-8 gap-x-10 my-20 last:*:w-fit last:*:mx-auto last:*:col-span-full last:*:mt-6">
				{data.map((food) => (
					<MenuItem key={food._id} food={food} />
				))}
				<ButtonContainer variant={"contained"}>
					ORDER YOUR FAVOURITE FOOD
				</ButtonContainer>
			</div>
		</div>
	);
}

export default MenuItems;
