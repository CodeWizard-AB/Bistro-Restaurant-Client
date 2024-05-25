/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loader from "../components/Loader";

function PrivateRoute({ children }) {
	const { user, loading } = useAuth();
	const location = useLocation();
	if (loading) return <Loader />;
	return user ? (
		children
	) : (
		<Navigate to={"/login"} state={location.pathname} replace={true} />
	);
}

export default PrivateRoute;
