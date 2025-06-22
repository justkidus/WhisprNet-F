import React, { useEffect, useState, useRef } from 'react';
import { useChatstore } from '@/store/useChatstore';
import MessageInput from './MessageInput';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import { useAuthStore } from '@/store/useAuthstore';
import react from '../assets/react.svg';
import { formatMessageTime } from '@/lib/utilis4';
import { useGroupChatStore } from '@/store/useGroupChatStore';
const GroupChatContainer = () => {
	const { authUser } = useAuthStore();
	const messageEndRef = useRef(null);
	// const {
	// 	messages,
	// 	getMessages,
	// 	isMessageLoading,
	// 	selectedUser,
	// 	subscribeToMessages,
	// 	unsubscribeFromMessages,
	// } = useChatstore();

	const {
		isSending,
		groups,
		Allgroups,
		groupMessages,
		setSelectedGroup,
		selectedGroup,
		groupMessageLoading,
		getGroupMessages,
		subscribeToGroupMessage,
		unsubscribeFromGroupMessages,
	} = useGroupChatStore();

	useEffect(() => {
		getGroupMessages(selectedGroup._id);
		subscribeToGroupMessage();
		return () => unsubscribeFromGroupMessages();
	}, [
		selectedGroup._id,
		getGroupMessages,
		subscribeToGroupMessage,
		unsubscribeFromGroupMessages,
	]);
	// console.log('getGroupMessages :', getGroupMessages);
	useEffect(() => {
		if (messageEndRef.current && groupMessages) {
			messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [groupMessages]);
	if (groupMessageLoading)
		return (
			<div className="flex-1 flex flex-cols overflow-auto">
				<MessageSkeleton />
			</div>
		);
	return (
		<div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[75vh]">
			{groupMessages.map((message) => (
				<div
					key={message._id}
					className={`chat ${
						message.senderId === authUser._id ? 'chat-end' : 'chat-start'
					}`}
					ref={messageEndRef}
				>
					<div className="chat-image avatar">
						<div className="size-10 rounded-full border">
							<img
								src={
									message.senderId === authUser._id
										? authUser.profilePic || react
										: selectedGroup.profilePic || react
								}
								alt="profile-pic"
							/>
						</div>
					</div>
					<div className="chat-header mb-1">
						<time className="text-xs opacity-50 ml-1">
							{formatMessageTime(message.createdAt)}
						</time>
					</div>
					<div className="chat-bubble flex flex-col w-[auto]">
						{message.image && (
							<img
								src={message.image}
								alt="Attachment"
								className="sm:max-w-[200px] rounded-md mb-2 "
							/>
						)}
						{message.text && (
							<p className="break-words max-w-[300px]">{message.text}</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default GroupChatContainer;
