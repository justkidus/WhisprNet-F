import { create } from 'zustand';
import toast from 'react-hot-toast';
import axiosInstance from '@/lib/axios';
import { useAuthStore } from './useAuthstore';
export const useChatstore = create((set, get) => ({
	messages: [],
	users: [],
	selectedUser: null,
	isUserLoading: false,
	isMessageLoading: false,

	getUsers: async () => {
		set({ isUserLoading: true });
		try {
			const response = await axiosInstance.get('/messages/getalluser');
			set({ users: response.data });
		} catch (error) {
			toast.error(error.response.data.msg);
		} finally {
			set({ isUserLoading: false });
		}
	},
	getMessages: async (_id) => {
		set({ isMessageLoading: true });
		try {
			const response = await axiosInstance.get(`/messages/getmessages/${_id}`);
			set({ messages: response.data });
		} catch (error) {
			toast.error(error.response);
		} finally {
			set({ isMessageLoading: false });
		}
	},
	sendMessage: async (messageData) => {
		const { selectedUser, messages } = get();
		try {
			const response = await axiosInstance.post(
				`/messages/sendmessages/${selectedUser._id}`,
				messageData
			);
			set({ messages: [...messages, response.data] });
		} catch (error) {
			// toast.error(error.response.data.msg);
			toast.error('error');
		}
	},
	subscribeToMessages: () => {
		const { selectedUser } = get();
		if (!selectedUser) return;
		const socket = useAuthStore.getState().socket;
		if (!socket) {
			console.error('Socket is not connected');
			return;
		}
		socket.on('newMessage', (newMessage) => {
			const isMessageSentFromSelectedUser =
				newMessage.senderId === selectedUser._id;
			if (!isMessageSentFromSelectedUser) return;
			set({ messages: [...get().messages, newMessage] });
		});
	},
	unsubscribeFromMessages: () => {
		const socket = useAuthStore.getState().socket;
		socket.off('newMessage');
	},
	setSelectedUser: (selectedUser) => {
		get().unsubscribeFromMessages(); // remove old listener
		set({ selectedUser });
		get().getMessages(selectedUser._id);
		get().subscribeToMessages();
	},
}));

{
	/*
	setSelectedUser: (selectedUser) => {
  get().unsubscribeFromMessages();
  set({ selectedUser });
  get().getMessages(selectedUser._id);
  get().subscribeToMessages();
},

subscribeToMessages: () => {
  const { selectedUser } = get();
  if (!selectedUser) return;
  const socket = useAuthStore.getState().socket;
  if (!socket) {
    console.error('Socket is not connected');
    return;
  }

  const handler = (newMessage) => {
    const authUserId = useAuthStore.getState().user._id;
    const isRelevant =
      (newMessage.senderId === selectedUser._id && newMessage.receiverId === authUserId) ||
      (newMessage.senderId === authUserId && newMessage.receiverId === selectedUser._id);

    if (!isRelevant) return;

    set({ messages: [...get().messages, newMessage] });
  };

  socket.on('newMessage', handler);
  set({ socketHandler: handler });
},

unsubscribeFromMessages: () => {
  const socket = useAuthStore.getState().socket;
  const { socketHandler } = get();
  if (socket && socketHandler) {
    socket.off('newMessage', socketHandler);
    set({ socketHandler: null });
  }
},

	*/
}
