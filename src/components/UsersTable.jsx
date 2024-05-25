import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Modal from "./Modal";
import { useState } from "react";

function UsersTable({ users }) {
	const [selectUser, setSelectUser] = useState(null);
	const [open, setOpen] = useState(false);
	const deleteData = useAxios();
	const queryClient = useQueryClient();
	const { mutate: handleDelete } = useMutation({
		mutationFn: async (id) => {
			const result = await Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, delete it!",
			});
			if (result.isConfirmed) {
				await deleteData.delete(`/users/${id}`);
				Swal.fire({
					title: "Deleted!",
					text: "Your guest has been deleted.",
					icon: "success",
				});
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["users"]);
		},
	});

	return (
		<section className="container mx-auto mt-10 mb-20 px-4 md:px-0">
			{selectUser && (
				<Modal open={open} setOpen={setOpen} selectUser={selectUser} />
			)}
			<Helmet>
				<title>TastyTap | Users</title>
			</Helmet>
			<div className="flex flex-col mt-6">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
								<thead className="bg-dashboard">
									<tr className="text-white text-2xl py-4 grid grid-cols-[0.2fr_1fr_1fr_1fr_1fr] justify-items-center px-10">
										<td></td>
										<td>Name</td>
										<td>Email</td>
										<td>Role</td>
										<td>Action</td>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
									{users?.map((user, i) => (
										<tr
											key={user._id}
											className="grid justify-items-center grid-cols-[0.2fr_1fr_1fr_1fr_1fr] items-center py-4 text-lg px-10"
										>
											<td>{i + 1}</td>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>{user.role}</td>
											<td>
												<div className="flex items-center gap-5">
													<button
														className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
														onClick={() => handleDelete(user._id)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth="1.5"
															stroke="currentColor"
															className="w-5 h-5"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
															/>
														</svg>
													</button>

													<button
														className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
														onClick={() => {
															setOpen(true);
															setSelectUser(user);
														}}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															strokeWidth="1.5"
															stroke="currentColor"
															className="w-5 h-5"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
															/>
														</svg>
													</button>
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default UsersTable;
