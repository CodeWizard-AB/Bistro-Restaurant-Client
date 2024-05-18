import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import useMenu from "../hooks/useMenu";
import ShopCard from "./ShopCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loader from "./Loader";

export default function ShopTabs() {
	const itemsPerPage = 3;
	const { category } = useParams();
	const [page, setPage] = React.useState(1);
	const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
	const [value, setValue] = React.useState(
		category ? `${categories.indexOf(category)}` : "0"
	);

	const recipes = [
		useMenu("salad"),
		useMenu("pizza"),
		useMenu("soup"),
		useMenu("dessert"),
		useMenu("drinks"),
	];

	if (recipes.some((recipe) => recipe.isLoading)) return <Loader />;

	return (
		<div className="px-40 my-24">
			<Helmet>
				<title>TastyTap | Shop {category ? `- ${category}` : ""} </title>
			</Helmet>
			<Box sx={{ width: "100%", typography: "body1" }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<TabList
							onChange={(_, value) => setValue(value)}
							aria-label="lab API tabs example"
							centered
						>
							{categories.map((category, i) => (
								<Tab
									label={category}
									key={i * 9}
									value={String(i)}
									onClick={() => setPage(1)}
								/>
							))}
						</TabList>
					</Box>
					{categories.map((category, i) => (
						<TabPanel value={String(i)} key={category}>
							<div className="grid grid-cols-3 gap-6 mt-6">
								{recipes[i].data
									?.slice((page - 1) * itemsPerPage, itemsPerPage * page)
									.map((recipe) => (
										<ShopCard key={recipe._id} recipe={recipe} />
									))}
							</div>
						</TabPanel>
					))}
				</TabContext>
			</Box>
			<div className="mt-3 grid place-items-center">
				<Pagination
					size="large"
					count={Math.ceil(recipes[value].data.length / itemsPerPage)}
					page={page}
					onChange={(_, value) => setPage(value)}
					renderItem={(item) => (
						<PaginationItem
							slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
							{...item}
						/>
					)}
				/>
			</div>
		</div>
	);
}
