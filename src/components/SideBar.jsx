import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { sideNav } from "../constants/index";

function SideBar() {
	return (
		<div className="fixed h-full">
			<Sidebar className="h-full" rootStyles={{ backgroundColor: "#D1A054" }}>
				<Menu
					menuItemStyles={{
						button: {
							["&:hover"]: {
								backgroundColor: "transparent",
								color: "#fab005",
							},
							["&.active"]: {
								color: "#fab005",
							},
						},
					}}
				>
					{sideNav.map(({ title, link, icon }, index) => (
						<MenuItem
							key={index * 99}
							icon={icon}
							className="py-1"
							component={<NavLink to={link} />}
						>
							{title.toUpperCase()}
						</MenuItem>
					))}
				</Menu>
			</Sidebar>
		</div>
	);
}

export default SideBar;
