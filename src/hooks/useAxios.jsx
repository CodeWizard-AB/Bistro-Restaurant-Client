import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:4000",
});

function useAxios() {
	return instance;
}

export default useAxios;
