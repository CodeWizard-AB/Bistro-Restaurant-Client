import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
		color: "white",
	},
}));

export default function Badges() {
	const getData = useAxios();
	const { data: cart } = useQuery({
		queryKey: ["cart"],
		queryFn: async () => {
			const { data } = await getData("/cart");
			return data.length;
		},
	});

	return (
		cart > 0 && (
			<Link to="/dashboard/cart">
				<IconButton aria-label="cart">
					<StyledBadge badgeContent={cart}>
						<ShoppingCartIcon sx={{ color: "white" }} fontSize="large" />
					</StyledBadge>
				</IconButton>
			</Link>
		)
	);
}
