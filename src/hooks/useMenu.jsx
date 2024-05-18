import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useMenu(category) {
	const { data } = useQuery({
		queryKey: ["menuItems", category],
		queryFn: async () => {
			const { data } = await axios("menu.json");
			return data.filter((item) => item.category === category);
		},
	});

	return data;
}

export default useMenu;
