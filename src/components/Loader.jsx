import { RotatingLines } from "react-loader-spinner";

function Loader() {
	return (
		<RotatingLines
			visible={true}
			width="25"
			color="white"
			strokeColor="white"
			strokeWidth="4"
			animationDuration="0.75"
		/>
	);
}

export default Loader;
