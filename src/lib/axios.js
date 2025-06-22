import axios from 'axios';

const axiosInstance = axios.create({
	// baseURL: [
	// 	'http://localhost:8001/api',
	// 	'https://whisprnet-b.onrender.com/api',
	// ],
	// baseURL: 'https://whisprnet-b.onrender.com/api',
	baseURL: 'http://localhost:8001/api',

	withCredentials: true,
});
export default axiosInstance;
