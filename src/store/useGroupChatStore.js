import { create } from 'zustand';
import toast from 'react-hot-toast';
import axiosInstance from '@/lib/axios';
import { useAuthStore } from './useAuthstore';

export const useGroupChatStore = create((set, get) => ({
	groups: [],
	groupMessages: [],
	selectedGroup: null,
	// users: [],
	// selectedUser: null,
	isGroupLoading: false,
	groupMessageLoading: false,
	isCreating: null,
	isSending: false,

	Allgroups: async () => {
		set({ isGroupLoading: true });
		try {
			const response = await axiosInstance.get(
				// `/group/getAllGroups`,
				`/group/getAllGroupsMembers`
			);
			set({ groups: response.data });
		} catch (error) {
			toast.error(error.response.data.msg);
		} finally {
			set({ isGroupLoading: false });
		}
	},
	createGroup: async (data) => {
		set({ isCreating: true });
		try {
			const response = await axiosInstance.post(`/group/creategroup`, data);
			set({ groups: response.data });
			toast.success('Group Create successfully');
		} catch (error) {
			toast.error(error.response.data.msg);
		} finally {
			set({ isCreating: false });
		}
	},
	getGroupMessages: async (_id) => {
		set({ isMessageLoading: true });
		try {
			const response = await axiosInstance.get(
				`/groupmessages/getgroupmessage/${_id}`
			);
			set({ groupMessages: response.data });
		} catch (error) {
			toast.error('error.response.data.msg');
		} finally {
			set({ isMessageLoading: false });
		}
	},
	sendMessageToGroup: async (messageData) => {
		const { selectedGroup, groupMessages } = get();
		set({ isSending: false });
		try {
			const respose = await axiosInstance.post(
				`/groupmessages/send/${selectedGroup._id}`,
				messageData
			);
			set({ groupMessages: [...groupMessages, respose.data] });
		} catch (error) {
			toast.error('error.response.data.msg');
		} finally {
			set({ isSending: false });
		}
	},
	subscribeToGroupMessage: () => {
		const { selectedGroup } = get();
		if (!selectedGroup) return;
		const socket = useAuthStore.getState().socket;

		socket.on('newMessage', (newMessage) => {
			const isMessageSentInTheSelectedGroup =
				newMessage.groupId === selectedGroup._id;
			if (!isMessageSentInTheSelectedGroup) return;
			set({ groupMessages: [...get().groupMessages, newMessage] });
		});
	},
	unsubscribeFromGroupMessages: () => {
		const socket = useAuthStore.getState().socket;
		socket.off('newMessage');
	},
	setSelectedGroup: (selectedGroup) => set({ selectedGroup }),
}));
