/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

function ButtonContainer({ children, variant, type, event, size, borderCol }) {
	return (
		<Button
			autoFocus={true}
			variant={variant}
			type={type}
			onClick={event}
			size={size || "large"}
			sx={{
				background: `${variant === "contained" ? "" : "white"}`,
				color: `${variant === "contained" ? "white" : "black"}`,
				borderColor: `${borderCol || ""}`,
				"&:hover": {
					background: `${variant === "contained" ? "" : "white"}`,
					borderColor: `${borderCol || ""}`,
				},
			}}
		>
			{children}
		</Button>
	);
}

export default ButtonContainer;
