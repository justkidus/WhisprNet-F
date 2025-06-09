import { create } from 'zustand';
import axiosInstance from '@/lib/axios';
import toast from 'react-hot-toast';
import { io } from 'socket.io-client';
const BASE_URL = 'http://localhost:8001';
// const BASE_URL = 'https://whisprnet-b.onrender.com';
export const useAuthStore = create((set, get) => ({
	authUser: null,
	isSigningUp: false,
	isLoggingIn: false,
	isUpdatingProfile: false,
	isCheckingAuth: true,
	onLineUsers: [],
	isLoggingOut: false,
	socket: null,
	checkAuth: async () => {
		try {
			const response = await axiosInstance.get('/users/checkauth');
			set({ authUser: response.data });
			get().connectSocket();
		} catch (error) {
			console.log('error in checkAuth', error);
			set({ authUser: null });
		} finally {
			set({ isCheckingAuth: false });
		}
	},
	signUp: async (data) => {
		set({ isSigningUp: true });
		try {
			const response = await axiosInstance.post('/users/signup', data);
			set({ authUser: response.data });
			toast.success('Account created successfully');
			get().connectSocket();
		} catch (error) {
			toast.error(error.response.data.msg);
		} finally {
			set({ isSigningUp: false });
		}
	},
	logout: async () => {
		set({ isLoggingOut: true });
		try {
			await axiosInstance.post('/users/logout');
			set({ authUser: null });
			toast.success('loggedout successfully');
			get().disconnectSocket();
		} catch (error) {
			toast.error(error.response.data.msg);
		} finally {
			set({ isLoggingOut: false });
		}
	},
	login: async (data) => {
		set({ isLoggingIn: true });
		try {
			const response = await axiosInstance.post('/users/login', data);
			set({ authUser: response.data });
			toast.success('logged In successfully');
			get().connectSocket();
		} catch (error) {
			toast.error(error.response.data.msg);
		} finally {
			set({ isLoggingIn: false });
		}
	},
	updateProfile: async (data) => {
		set({ isUpdatingProfile: true });
		try {
			const response = await axiosInstance.put('/users/updateprofile', data);
			set({ authUser: response.data });
			toast.success('profile updated successfully');
		} catch (error) {
			console.log('Error is update profile', error);
			toast.error(error.response.data.msg);
		} finally {
			set({ isUpdatingProfile: false });
		}
	},
	connectSocket: () => {
		const { authUser } = get();
		if (!authUser || get().socket?.connected) return;
		const socket = io(BASE_URL, {
			query: {
				userId: authUser._id,
			},
		});
		socket.connect();

		set({ socket: socket });

		socket.on('getOnlineUsers', (userIds) => {
			set({ onlineUsers: userIds });
		});
	},
	disconnectSocket: () => {
		if (get().socket?.connected) get().socket.disconnect();
	},
}));
