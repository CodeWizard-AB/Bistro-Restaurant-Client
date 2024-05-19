import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { navigation } from "../constants";
// import { IoAddCircleOutline } from "react-icons/io5";
// import { MdOutlineFoodBank } from "react-icons/md";
// import { BiFoodMenu } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const StyledBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: "#44b700",
		color: "#44b700",
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			borderRadius: "50%",
			animation: "ripple 1.2s infinite ease-in-out",
			border: "1px solid currentColor",
			content: '""',
		},
	},
	"@keyframes ripple": {
		"0%": {
			transform: "scale(.8)",
			opacity: 1,
		},
		"100%": {
			transform: "scale(2.4)",
			opacity: 0,
		},
	},
}));

export default function Account() {
	const { user, logOut } = useAuth();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		user && (
			<>
				<Box
					sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
				>
					<Tooltip title="Account settings">
						<IconButton
							onClick={handleClick}
							size="small"
							sx={{ ml: 2 }}
							aria-controls={open ? "account-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
						>
							<StyledBadge
								overlap="circular"
								anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								variant="dot"
							>
								<Avatar
									sx={{ width: 50, height: 50 }}
									src={user?.photoURL}
									alt={user?.displayName}
								/>
							</StyledBadge>
						</IconButton>
					</Tooltip>
				</Box>
				<Menu
					anchorEl={anchorEl}
					id="account-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							minWidth: 200,
							overflow: "visible",
							filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
							mt: 1.5,
							"& .MuiAvatar-root": {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							"&::before": {
								content: '""',
								display: "block",
								position: "absolute",
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: "background.paper",
								transform: "translateY(-50%) rotate(45deg)",
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: "right", vertical: "top" }}
					anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				>
					<MenuItem onClick={handleClose}>
						<Avatar src={user.photoURL} /> {user?.displayName}
					</MenuItem>
					<Divider />
					{navigation.slice(2).map(({ title, link }, i) => (
						<Link key={i} to={link}>
							<MenuItem onClick={handleClose}>
								{/* <ListItemIcon>
									{link === "/add-food" && <IoAddCircleOutline size={25} />}
									{link === "/request-foods" && <MdOutlineFoodBank size={25} />}
									{link === "/manage-foods" && <BiFoodMenu size={25} />}
								</ListItemIcon> */}
								<span>{title.toUpperCase()}</span>
							</MenuItem>
						</Link>
					))}
					<MenuItem
						onClick={() => {
							logOut();
							handleClose();
						}}
					>
						<ListItemIcon>
							<Logout />
						</ListItemIcon>
						Logout
					</MenuItem>
				</Menu>
			</>
		)
	);
}
