import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

export default function Modal({ open, setOpen, selectUser }) {
	const queryClient = useQueryClient();
	const [role, setRole] = React.useState("");
	const patchData = useAxios();

	const handleChange = (event) => {
		setRole(event.target.value);
	};

	const handleClose = (event, reason) => {
		if (reason !== "backdropClick") {
			setOpen(false);
		}
	};

	const { mutate } = useMutation({
		mutationFn: async () => {
			const { isConfirmed } = await Swal.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes, change to admin",
			});
			if (isConfirmed) {
				const { _id, ...remaining } = selectUser;
				await patchData.patch(`/users/${_id}`, {
					...remaining,
					role,
				});
				const { isConfirmed } = await Swal.fire({
					title: "Deleted!",
					text: "Your guest changed to admin",
					icon: "success",
				});
				if (isConfirmed) {
					handleClose();
				}
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["users"]);
		},
	});

	return (
		<Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
			<DialogTitle>Change the role of guest</DialogTitle>
			<DialogContent>
				<Box
					component="form"
					sx={{ display: "flex", justifyContent: "center" }}
				>
					<FormControl sx={{ m: 1 }} fullWidth>
						<InputLabel id="demo-dialog-select-label">Role</InputLabel>
						<Select
							labelId="demo-dialog-select-label"
							id="demo-dialog-select"
							value={role || selectUser.role}
							onChange={handleChange}
							input={<OutlinedInput label="Role" />}
						>
							<MenuItem value={"guest"}>Guest</MenuItem>
							<MenuItem value={"admin"}>Admin</MenuItem>
						</Select>
					</FormControl>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={mutate}>Ok</Button>
			</DialogActions>
		</Dialog>
	);
}
