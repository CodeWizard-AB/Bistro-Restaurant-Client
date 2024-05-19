import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAxios from "../hooks/useAxios";
import { useAuth } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function ShopCard({ recipe }) {
	const { user } = useAuth();
	const navigate = useNavigate();
	const postData = useAxios();
	const handleCart = async () => {
		const { _id, ...remaining } = recipe;
		if (user) {
			await postData.post("/cart", {
				...remaining,
				menu_id: _id,
				buyer_email: user?.email,
			});
		} else {
			navigate("/login", { state: `/shop/${recipe?.category}` });
		}
	};

	return (
		<Card sx={{ textAlign: "center" }}>
			<CardMedia
				sx={{ height: 200 }}
				image={recipe?.image}
				title={recipe?.recipe}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{recipe?.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{recipe?.recipe}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					variant="contained"
					sx={{ marginX: "auto", marginBottom: 2 }}
					onClick={handleCart}
				>
					add to card
				</Button>
			</CardActions>
		</Card>
	);
}
