import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";
import MenuItem from "./MenuItem";
import Heading from "./Heading";
import ButtonContainer from "./Button";
import { Link } from "react-router-dom";
import useMenu from "../hooks/useMenu";

function PopularMenu() {
	const { data, isLoading } = useMenu("popular");

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
				<Link to="/menu">
					<ButtonContainer variant={"contained"}>
						View Full Menu
					</ButtonContainer>
				</Link>
			</div>
		</div>
	);
}

export default PopularMenu;
