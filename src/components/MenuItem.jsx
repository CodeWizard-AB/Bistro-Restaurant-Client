function MenuItem({ food }) {
	return (
		<figure className="flex gap-6">
			<img
				src={food.image}
				style={{
					borderRadius: "0px 200px 200px 200px",
					width: "118px",
				}}
			/>
			<figcaption className="first:*:text-xl">
				<p>{food.name} - - - - - - -</p>
				<p>{food.recipe}</p>
			</figcaption>
			<p>${food.price}</p>
		</figure>
	);
}

export default MenuItem;
