import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

function Dashboard() {
	return (
		<div>
			<SideBar />
			<main className="px-20 bg-[#F6F6F6] py-10 ml-[250px]">
				<Outlet />
			</main>
		</div>
	);
}

export default Dashboard;
