import React, { useEffect, useState } from 'react';
import { Command } from 'lucide-react';
import { IoMdSettings } from 'react-icons/io';
import { IoMdChatboxes } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { MdGroups3 } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';
import { NavUser } from '@/components/nav-user';
import { Label } from '@/components/ui/label';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarInput,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import { Switch } from '@/components/ui/switch';
import { useChatstore } from '@/store/useChatstore';
import { useAuthStore } from '@/store/useAuthstore';
import { useGroupChatStore } from '@/store/useGroupChatStore';
import react from '../assets/react.svg';
import { useNavigate } from 'react-router-dom';
// This is sample data
import Page from '@/dashboard/page';
import avatar from '@/assets/react.svg';

const data = {
	// user: {
	// 	name: 'shadcn',
	// 	email: 'm@example.com',
	// 	avatar: avatar,
	// },
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
export function AppSidebar({ ...props }) {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		handleResize(); // Initial check
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const navigate = useNavigate();
	const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
	const { setOpen } = useSidebar();
	const { getUsers, users, setSelectedUser, selectedUser, isUserLoading } =
		useChatstore();
	const { groups, Allgroups, setSelectedGroup, selectedGroup, isGroupLoading } =
		useGroupChatStore();
	useEffect(() => {
		Allgroups();
	}, [Allgroups]);
	console.log('groups :', groups);
	useEffect(() => {
		getUsers();
	}, [getUsers]);
	const { onLineUsers } = useAuthStore();
	console.log('users : ', users);
	const nav = useNavigate();

	const handleSelectedUser = (user) => {
		setSelectedUser(user);
		nav(`/allchats/${user._id}`);
	};
	const handleSelectedGroup = (group) => {
		setSelectedGroup(group);
		nav(`/groups/${group._id}`);
	};
	console.log(selectedUser);
	return (
		<>
			<Sidebar
				collapsible="icon"
				className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
				{...props}
			>
				{/* This is the first sidebar */}
				{/* We disable collapsible and adjust width to icon. */}
				{/* This will make the sidebar appear as icons. */}
				<Sidebar
					collapsible="none"
					className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
				>
					<SidebarHeader>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
									<a href="#">
										<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
											<Command className="size-4" />
										</div>
										<div className="grid flex-1 text-left text-sm leading-tight">
											<span className="truncate font-medium">Acme Inc</span>
											<span className="truncate text-xs">Enterprise</span>
										</div>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarHeader>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupContent className="px-1.5 md:px-0">
								<SidebarMenu>
									{data.navMain.map((item) => (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton
												tooltip={{
													children: item.title,
													hidden: false,
												}}
												onClick={() => {
													setActiveItem(item);
													const mail = data.mails.sort(
														() => Math.random() - 0.5
													);
													// setMails(
													// 	mail.slice(
													// 		0,
													// 		Math.max(5, Math.floor(Math.random() * 10) + 1)
													// 	)
													// );
													setOpen(true);
												}}
												isActive={activeItem?.title === item.title}
												className="px-2.5 md:px-2"
											>
												<item.icon />
												<span>{item.title}</span>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
					<SidebarFooter>
						<NavUser />
					</SidebarFooter>
				</Sidebar>
				{/* This is the second sidebar */}
				{/* We disable collapsible and let it fill remaining space */}
				<Sidebar collapsible="none" className="hidden flex-1 md:flex sm:flex">
					<SidebarHeader className="gap-3.5 border-b p-4">
						<div className="flex w-full items-center justify-between">
							<div className="text-foreground text-base font-medium">
								{activeItem?.title}
							</div>
							<Label className="flex items-center gap-2 text-sm">
								<span>Unreads</span>
								<Switch className="shadow-none" />
							</Label>
						</div>
						<SidebarInput placeholder="Type to search..." />{' '}
					</SidebarHeader>
					<SidebarContent>
						{/* allchat's */}
						{activeItem?.title === 'AllChats' && (
							<>
								{users.map((user) => (
									<div
										key={user._id}
										onClick={() => handleSelectedUser(user)}
										className="flex items-center gap-4 p-2 border-b cursor-pointer hover:bg-gray-100"
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
							</>
						)}

						{/* user's */}
						{activeItem?.title === 'Users' &&
							users.map((user) => (
								<div
									key={user._id}
									onClick={() => handleSelectedUser(user)}
									className="flex items-center gap-4 p-2 border-b cursor-pointer hover:bg-gray-100"
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
				</Sidebar>
			</Sidebar>
		</>
	);
}
