import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import useAxios from "../../hooks/useAxios";
import ButtonContainer from "../../components/Button";
import CartTable from "../../components/CartTable";
import Loader from "../../components/Loader";

function Cart() {
	const getData = useAxios();
	const { data: cart, isLoading } = useQuery({
		queryKey: ["cartItems"],
		queryFn: async () => {
			const { data } = await getData("/cart");
			return data;
		},
	});

	if (isLoading) return <Loader />;

	return (
		<section>
			<Heading>
				<p>---My Cart---</p>
				<p>WANNA ADD MORE?</p>
			</Heading>
			<div className="bg-white p-12">
				<div className="flex justify-between text-3xl font-medium items-center">
					<p>Total Orders: {cart?.length}</p>
					<p>Total Price: ${cart?.reduce((sum, item) => sum + item.price, 0)}</p>
					<ButtonContainer variant={"contained"}>pay</ButtonContainer>
				</div>
				<CartTable cart={cart} />
			</div>
		</section>
	);
}

export default Cart;
