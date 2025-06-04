import axios from 'axios';

const axiosInstance = axios.create({
	// baseURL: 'http://localhost:8001/api',
	baseURL: 'https://whispr-net-b.vercel.app/api',
	withCredentials: true,
});
export default axiosInstance;
