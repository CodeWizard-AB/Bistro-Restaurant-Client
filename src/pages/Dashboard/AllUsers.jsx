import { useQuery } from "@tanstack/react-query";
import Heading from "../../components/Heading";
import useAxios from "../../hooks/useAxios";
import Loader from "../../components/Loader";
import UsersTable from "../../components/UsersTable";

function AllUsers() {
	const fetchData = useAxios();

	const { data: users, isLoading } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const { data } = await fetchData("/users");
			return data;
		},
	});

	if (isLoading) return <Loader />;

	return (
		<div>
			<Heading>
				<p>---How many??---</p>
				<p>MANAGE ALL USERS</p>
			</Heading>
			<div className="bg-white p-12">
				<div className="flex justify-between text-3xl font-medium items-center">
					<p>Total Users: {users?.length}</p>
				</div>
				<UsersTable users={users} />
			</div>
		</div>
	);
}

export default AllUsers;
