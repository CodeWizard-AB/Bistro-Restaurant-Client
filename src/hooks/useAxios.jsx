import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useAxios({ category }) {
	const { data } = useQuery({
		queryKey: ["menuItems", category],
		queryFn: () => axios("menu.json").then(({ data }) => data),
	});

	return data.filter((food) => food.category === category);
}

export default useAxios;
