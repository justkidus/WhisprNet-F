import axios from 'axios';

const axiosInstance = axios.create({
	// baseURL: 'http://localhost:8001/api',
	baseURL: 'https://whisprnet-b.onrender.com/api',
	withCredentials: true,
});
export default axiosInstance;
