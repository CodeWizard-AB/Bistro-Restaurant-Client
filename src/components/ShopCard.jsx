import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ShopCard({ recipe }) {
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
				>
					add to card
				</Button>
			</CardActions>
		</Card>
	);
}
