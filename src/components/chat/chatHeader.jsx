import React from 'react';
import { useAuthStore } from '@/store/useAuthstore';
import { useChatstore } from '@/store/useChatstore';
import avatar from '../../assets/react.svg';
import { X } from 'lucide-react';
export function ChatHeader() {
	const { selectedUser, setSelectedUser } = useChatstore();
	const { onlineUsers } = useAuthStore();

	return (
		<div>
			<div className="p-2.5 border-b border-base-300">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						{/* Avatar */}
						<div className="avatar">
							<div className="size-10 rounded-full relative">
								{/* <img
									src={selectedUser.avatar || profilePic}
									alt={selectedUser.fullName}
								/> */}
							</div>
						</div>

						{/* User info */}
						<div>
							<h3 className="font-medium">{selectedUser.fullName}</h3>
							<p className="text-sm text-base-content/70">
								{onlineUsers.includes(selectedUser._id) ? 'Online' : 'Offline'}
							</p>
						</div>
					</div>

					{/* Close button */}

					<button
						onClick={() => setSelectedUser(null)}
						className="flex justify-end"
					>
						<X />
					</button>
				</div>
			</div>
		</div>
	);
}
