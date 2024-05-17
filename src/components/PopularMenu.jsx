import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";
import MenuItem from "./MenuItem";
import Heading from "./Heading";
import ButtonContainer from "./Button";

function PopularMenu() {
	const { data, isLoading } = useQuery({
		queryKey: ["popularItems"],
		queryFn: async () => {
			const { data } = await axios("menu.json");
			return data.filter((item) => item.category === "popular");
		},
	});

	if (isLoading) return <Loader />;

	return (
		<div>
			<Heading>
				<p>---Check it out---</p>
				<p>FROM OUR MENU</p>
			</Heading>
			<div className="grid md:grid-cols-2 gap-y-8 gap-x-10 my-20 last:*:w-fit last:*:mx-auto last:*:col-span-full last:*:mt-6">
				{data.map((food) => (
					<MenuItem key={food._id} food={food} />
				))}
				<ButtonContainer variant={"contained"}>View Full Menu</ButtonContainer>
			</div>
		</div>
	);
}

export default PopularMenu;
