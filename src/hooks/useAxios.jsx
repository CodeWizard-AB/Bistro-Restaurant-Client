import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
	baseURL: "http://localhost:4000",
	withCredentials: true,
});

function useAxios() {
	const { logOut } = useAuth();
	const navigate = useNavigate();

	instance.interceptors.request.use(
		(config) => {
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	instance.interceptors.response.use(
		(response) => {
			return response;
		},
		async (error) => {
			const status = error.response.status;
			if (status === 401 || status === 403) {
				await logOut();
				navigate("/login");
			}
			return Promise.reject(error);
		}
	);

	return instance;
}

export default useAxios;
