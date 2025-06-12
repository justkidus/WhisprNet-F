import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useChatstore } from '@/store/useChatstore';
import { useAuthStore } from '@/store/useAuthstore';
import ChatContainer from '@/dashboard/ChatContainer';
import MessageInput from '@/dashboard/MessageInput';
import { ArrowLeft } from 'lucide-react';
import react from '../assets/react.svg';
const ChatPage = () => {
	const { userId } = useParams();
	const navigate = useNavigate();
	const { users, getUsers, setSelectedUser, selectedUser } = useChatstore();
	const { authUser, onLineUsers } = useAuthStore();

	useEffect(() => {
		getUsers();
	}, [getUsers]);

	useEffect(() => {
		if (users.length > 0) {
			const user = users.find((u) => u._id === userId);
			if (user) {
				setSelectedUser(user);
			}
		}
	}, [users, userId, setSelectedUser]);

	if (!selectedUser) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col h-screen w-screen bg-white">
			<header className="sticky top-0 flex items-center gap-2 border-b bg-background p-4 h-[50px] w-full">
				<button
					onClick={() => navigate(-1)}
					className="p-2 hover:bg-gray-100 rounded-full"
				>
					<ArrowLeft className="h-5 w-5" />
				</button>
				<div className="flex items-center gap-3">
					<div className="avatar">
						<div className="size-10 rounded-full relative">
							<img
								src={selectedUser.profilePic || react}
								alt={selectedUser.fullName}
								className="rounded-full"
							/>
						</div>
					</div>
					<div>
						<h3 className="font-medium">{selectedUser.fullName}</h3>
						<p className="text-sm text-base-content/70">
							{onLineUsers.includes(selectedUser._id) ? 'Online' : 'Offline'}
						</p>
					</div>
				</div>
			</header>

			<main className="flex-1 overflow-y-auto mt-[20px]">
				{' '}
				<ChatContainer />{' '}
			</main>
			<footer className=" flex border-t p-4 max-h-[10vh]">
				<MessageInput />
			</footer>
		</div>
	);
};

export default ChatPage;
