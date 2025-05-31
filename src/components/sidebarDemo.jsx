'use client';

import React, { useState } from 'react';
import {
	Sidebar,
	SidebarBody,
	SidebarLink,
} from '../components/ui/userSidebar';
import {
	FaSignOutAlt,
	FaUserCog,
	FaUser,
	// FaTachometerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
// import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { IoMdChatboxes } from 'react-icons/io';
import { MdGroups3 } from 'react-icons/md';

import { GrChannel } from 'react-icons/gr';
// import List from './list';
// import SideChat from './sideChat';
// import ChatArea from './chat/chatArea';
export function SidebarDemo() {
	const links = [
		{
			label: 'AllChats',
			href: '/allchats',
			icon: (
				// <IoMdChatboxes className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
				<IoMdChatboxes className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
			),
		},
		{
			label: 'users',
			href: 'users',
			icon: (
				<FaUser className=" shrink-0 text-neutral-700 dark:text-neutral-200" />
			),
		},
		{
			label: 'Groups',
			href: '#',
			icon: (
				<MdGroups3 className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
			),
		},
		{
			label: 'Channel',
			href: '#',
			icon: (
				<GrChannel className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
			),
		},
	];

	const [open, setOpen] = useState(false);

	return (
		<div
			className={cn(
				'mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800',
				'h-[95vh]'
			)}
		>
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody className="justify-between gap-10">
					<div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
						{open ? <Logo /> : <LogoIcon />}
						<div className="mt-8 flex flex-col gap-2">
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>
					<div>
						<SidebarLink
							link={{
								label: 'Manu Arora',
								href: '#',
								icon: (
									<img
										src="https://assets.aceternity.com/manu.png"
										className="h-7 w-7 shrink-0 rounded-full"
										width={50}
										height={50}
										alt="Avatar"
									/>
								),
							}}
						/>
					</div>
				</SidebarBody>
			</Sidebar>

			<Dashboard />
		</div>
	);
}

const Logo = () => (
	<a
		href="#"
		className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
	>
		{/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
		<motion.span
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="font-medium whitespace-pre text-black dark:text-white"
		>
			{/* Acet Labs */}
			{/* <SidebarProvider>
				<SidebarTrigger />
			</SidebarProvider> */}
			WhisprNet
		</motion.span>
	</a>
);

const LogoIcon = () => (
	<a
		href="#"
		// className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
	>
		{/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
	</a>
);

const Dashboard = ({ children }) => {
	return (
		<div className="flex flex-1">
			{/* <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900"> */}
			{/* <div className="flex gap-2">
					{[...new Array(4)].map((_, idx) => (
						<div
							key={'first-array-demo-1' + idx}
							className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
						>
							
						</div>
					))}
				</div> */}
			{/* <SideChat /> */}
			{children}
			{/* <ChatArea /> */}
			{/* <List /> */}
			{/* <div className="flex flex-1 gap-2">
					{[...new Array(2)].map((_, idx) => (
						<div
							key={'second-array-demo-1' + idx}
							className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
						>
							haaa
						</div>
					))}
				</div> */}
			{/* </div> */}
		</div>
	);
};
