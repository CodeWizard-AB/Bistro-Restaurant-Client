import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import useAxios from "./useAxios";

function useAdmin() {
	const { user } = useAuth();
	const fetchData = useAxios();
	const { data } = useQuery({
		queryKey: [user?.email, "admin"],
		queryFn: async () => {
			const { data } = await fetchData(`/user/admin/${user?.email}`);
			return data.admin;
		},
	});

	return data;
}

export default useAdmin;
