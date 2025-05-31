import React, { useEffect, useState, useRef } from 'react';
import { useChatstore } from '@/store/useChatstore';
import MessageInput from './MessageInput';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import { useAuthStore } from '@/store/useAuthstore';
import react from '../assets/react.svg';
import { formatMessageTime } from '@/lib/utilis4';
const ChatContainer = () => {
	const { authUser } = useAuthStore();
	const messageEndRef = useRef(null);
	const {
		messages,
		getMessages,
		isMessageLoading,
		selectedUser,
		subscribeToMessages,
		unsubscribeFromMessages,
	} = useChatstore();

	useEffect(() => {
		getMessages(selectedUser._id);
		subscribeToMessages();
		return () => unsubscribeFromMessages();
	}, [
		selectedUser._id,
		getMessages,
		subscribeToMessages,
		unsubscribeFromMessages,
	]);

	useEffect(() => {
		if (messageEndRef.current && messages) {
			messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages]);
	if (isMessageLoading)
		return (
			<div className="flex-1 flex flex-cols overflow-auto">
				<MessageSkeleton />
			</div>
		);
	return (
		<div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[75vh]">
			{messages.map((message) => (
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
										: selectedUser.profilePic || react
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

export default ChatContainer;
