import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import useMenu from "../hooks/useMenu";
import ShopCard from "./ShopCard";

export default function ShopTabs() {
	const [value, setValue] = React.useState("0");
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
	const recipes = [
		useMenu("salad"),
		useMenu("pizza"),
		useMenu("soup"),
		useMenu("dessert"),
		useMenu("drinks"),
	];

	return (
		<div className="px-40 my-24">
			<Box sx={{ width: "100%", typography: "body1" }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList
							onChange={handleChange}
							aria-label="lab API tabs example"
							centered
						>
							{categories.map((category, i) => (
								<Tab label={category} key={i * 9} value={String(i)} />
							))}
						</TabList>
					</Box>
					{categories.map((category, i) => (
						<TabPanel value={String(i)} key={category}>
							<div className="grid grid-cols-3 gap-6 mt-6">
								{recipes[i]?.map((recipe) => (
									<ShopCard key={recipe._id} recipe={recipe} />
								))}
							</div>
						</TabPanel>
					))}
				</TabContext>
			</Box>
		</div>
	);
}
