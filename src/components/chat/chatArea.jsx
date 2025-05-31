import React from 'react';
import { useAuthStore } from '@/store/useAuthstore';
import { useChatstore } from '@/store/useChatstore';
import avatar from '../../assets/react.svg';
import { X } from 'lucide-react';
export function ChatHeader() {
	const { selectedUser, setSelectedUser } = useChatstore();
	const { onlineUsers } = useAuthStore();

	return (
		// 		<div>
		// 			<div className="p-2.5 border-b border-base-300 w-[50%] flex items-center justify-left">
		// 				<div className="flex items-center justify-between">
		// 					<div className="flex items-center gap-3">
		// 						{/* Avatar */}
		// 						<div className="avatar">
		// 							{/* <div className="size-10 rounded-full relative">
		// 								<img
		// 									src={selectedUser.avatar || profilePic}
		// 									alt={selectedUser.fullName}
		// 								/>
		// 							</div> */}
		// 						</div>

		// 						{/* User info */}
		// 						<div>
		// 							<h3 className="font-medium">{selectedUser.fullName}</h3>
		// 							{/* <h3 className="font-medium">{selectedUser.fullName}</h3> */}

		// 							{/* <p className="text-sm text-base-content/70">
		// 								{onlineUsers.includes(selectedUser._id) ? 'Online' : 'Offline'}
		// 							</p> */}
		// 						</div>
		// 					</div>

		// 					{/* Close button */}

		// 					<button
		// 						onClick={() => setSelectedUser(null)}
		// 						className="flex justify-end"
		// 					>
		// 						<X />
		// 					</button>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	);
		// }
		<div>
			<h3 className="font-medium">{selectedUser.fullName}</h3>
		</div>
	);
}
export function NoChatSelected() {
	return (
		<div className="min-h-screen flex items-center justify-center px-4 min-w-full">
			{/* <SidebarProvider>
				<AppSidebar />
				<main>
					<SidebarTrigger />
					{children}
				</main>
			</SidebarProvider> */}
			<div className="text-center">
				<h1 className="text-3xl font-semibold leading-relaxed">
					<span>Connect With people, </span>
					<br />
					discover and find interseting People
				</h1>
			</div>
		</div>
	);
}
export function ChatArea() {
	const { selectedUser, setSelectedUser } = useChatstore();

	return (
		<>
			<div>{selectedUser ? <ChatHeader /> : <NoChatSelected />}</div>
		</>
	);
}
