import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

function useMenu(category) {
	const fetchData = useAxios();
	const { data, isLoading } = useQuery({
		queryKey: ["menuItems", category],
		queryFn: async () => {
			const { data } = await fetchData(`/menu?category=${category}`);
			return data;
		},
	});

	return { data, isLoading };
}

export default useMenu;
