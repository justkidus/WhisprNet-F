import React, { useState, useEffect } from 'react';
import { IoMdSettings } from 'react-icons/io';
import { IoMdChatboxes } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { MdGroups3 } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';
import { useChatstore } from '@/store/useChatstore';
import react from '../assets/react.svg';
import { useAuthStore } from '../store/useAuthstore';
import { useGroupChatStore } from '../store/useGroupChatStore';
import { SidebarContent, SidebarMenuButton } from '@/components/ui/sidebar';
import { useNavigate } from 'react-router-dom';
const HeaderBar = () => {
	const data = {
		navMain: [
			{
				title: 'AllChats',
				url: '/AllChats',
				icon: IoMdChatboxes,
				isActive: true,
			},
			{
				title: 'Users',
				url: '/Users',
				icon: FaUser,
				isActive: false,
			},
			{
				title: 'Groups',
				url: '/Groups',
				icon: MdGroups3,
				isActive: false,
			},
			{
				title: 'Channels',
				url: '/Channels',
				icon: GrChannel,
				isActive: false,
			},
			{
				title: 'Setting',
				url: '/Setting',
				icon: IoMdSettings,
				isActive: false,
			},
		],
	};
	const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		handleResize(); // Initial check
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const { getUsers, users, setSelectedUser, selectedUser, isUserLoading } =
		useChatstore();
	const { onLineUsers } = useAuthStore();
	const { groups, Allgroups, setSelectedGroup, selectedGroup, isGroupLoading } =
		useGroupChatStore();
	const nav = useNavigate();

	const handleSelectedUser = (user) => {
		setSelectedUser(user);
		nav(`/allchats/${user._id}`);
	};
	const handleSelectedGroup = (group) => {
		setSelectedGroup(group);
		nav(`/groups/${group._id}`);
	};
	if (!isMobile) return null;
	return (
		<>
			<div className="w-full h-full">
				<div className="flex flex-row">
					{data.navMain.map((item) => (
						<SidebarMenuButton
							tooltip={{ children: item.title, hidden: false }}
							onClick={() => {
								setActiveItem(item);
							}}
							isActive={activeItem?.title === item.title}
							className="px-2.5 md:px-2"
						>
							<item.icon />
						</SidebarMenuButton>
					))}
				</div>
				<div className=" ">
					<SidebarContent className="p-4 w-full h-[98vh] bg-white overflow-auto overflow-y-auto">
						{/* allchat's */}
						{activeItem?.title === 'AllChats' && (
							<>
								{users.map((user) => (
									<div
										key={user._id}
										onClick={() => handleSelectedUser(user)}
										className="flex items-center gap-4 p-2 border-b cursor-pointer hover:bg-gray-100 w-screen"
									>
										<div className="relative">
											<img
												src={user.profilePic || react}
												alt={user.fullName}
												className="w-10 h-10 rounded-full"
											/>
											{onLineUsers.includes(user._id) && (
												<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
											)}
										</div>
										<div>{user.fullName}</div>
									</div>
								))}

								{groups.map((group) => (
									<div
										key={group._id}
										onClick={() => handleSelectedGroup(group)}
										className="flex items-center gap-4 p-2 border-b cursor-pointer hover:bg-gray-100 w-screen"
									>
										<div className="relative">
											<img
												src={group.profilePic || react}
												alt={group.name}
												className="w-10 h-10 rounded-full"
											/>
										</div>
										<div>{group.name}</div>
									</div>
								))}
							</>
						)}

						{/* user's */}
						{activeItem?.title === 'Users' &&
							users.map((user) => (
								<div
									key={user._id}
									onClick={() => handleSelectedUser(user)}
									className="flex items-center gap-4 p-2 border-b cursor-pointer hover:bg-gray-100 w-screen"
								>
									<div className="relative">
										<img
											src={user.profilePic || react}
											alt={user.fullName}
											className="w-10 h-10 rounded-full"
										/>
										{onLineUsers.includes(user._id) && (
											<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
										)}
									</div>
									<div>{user.fullName}</div>
								</div>
							))}

						{/* group */}
						{activeItem?.title === 'Groups' && (
							<>
								{groups.map((group) => (
									<div
										key={group._id}
										onClick={() => handleSelectedGroup(group)}
										className="flex items-center gap-4 p-2 border-b cursor-pointer hover:bg-gray-100"
									>
										<div className="relative">
											<img
												src={group.profilePic || react}
												alt={group.name}
												className="w-10 h-10 rounded-full"
											/>
										</div>
										<div>{group.name}</div>
									</div>
								))}

								<button
									className="mx-4 my-4 h-10 rounded bg-black text-white hover:bg-gray-800"
									onClick={() => nav('/createGroup')}
								>
									Create A Group
								</button>
							</>
						)}
					</SidebarContent>
				</div>
			</div>
		</>
	);
};
export default HeaderBar;
