import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development"
		? "http://localhost:5004/api"
		: "backend-alb-1894237244.ca-central-1.elb.amazonaws.com",
	withCredentials: true, 
});

export default axiosInstance;
