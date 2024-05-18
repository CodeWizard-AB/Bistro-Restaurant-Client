import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useMenu(category) {
	const { data, isLoading } = useQuery({
		queryKey: ["menuItems", category],
		queryFn: async () => {
			const { data } = await axios(
				`http://localhost:4000/menu?category=${category}`
			);
			return data;
		},
	});

	return { data, isLoading };
}

export default useMenu;
