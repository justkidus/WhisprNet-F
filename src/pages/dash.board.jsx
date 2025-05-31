// // 'use client';
// // import React, { useState } from 'react';
// // import { Sidebar, SidebarBody, SidebarLink } from '../components/ui/sidebar';
// // import {
// // 	// FaTachometerAlt,
// // 	FaUserCog,
// // 	// FaUser,
// // 	// FaSignOutAlt,
// // 	FaUsers,
// // } from 'react-icons/fa';
// // import { MdGroup } from 'react-icons/md';
// // import { GrChannel } from 'react-icons/gr';
// // import { CiUser } from 'react-icons/ci';
// // import { motion } from 'motion/react';
// // import { cn } from '@/lib/utils';
// // import { useThemeStore } from '@/store/useThemestore';
// // import Theme from './theme.page';
// // // import Setting from './setting.page';
// // // import { Routes, Route } from 'react-router-dom';
// // // import Board from './board.page';
// // function SidebarDemo() {
// // 	const theme = useThemeStore();
// // 	const links = [
// // 		{
// // 			label: 'AllChats',
// // 			href: '#allUsers',
// // 			icon: (
// // 				<FaUsers className="h-5 w-5 shrink-0 " />
// // 				// text-neutral-700 dark:text-neutral-200
// // 			),
// // 		},
// // 		{
// // 			label: 'Personal',
// // 			href: '#personal',
// // 			icon: (
// // 				<CiUser className="h-5 w-5 shrink-0 " />
// // 				// text-neutral-700 dark:text-neutral-200
// // 			),
// // 		},
// // 		{
// // 			label: 'Group',
// // 			href: '#group',
// // 			icon: (
// // 				<MdGroup className="h-5 w-5 shrink-0 " />
// // 				//text-neutral-700 dark:text-neutral-200
// // 			),
// // 		},
// // 		{
// // 			label: 'Channel',
// // 			href: '#channel',
// // 			icon: (
// // 				<GrChannel className="h-5 w-5 shrink-0 " />
// // 				//text-neutral-700 dark:text-neutral-200
// // 			),
// // 		},
// // 		{
// // 			label: 'Settings',
// // 			href: '/setting',
// // 			icon: (
// // 				<FaUserCog
// // 					className={
// // 						('h-5 w-5 shrink-0 ',
// // 						//text-neutral-700 dark:text-neutral-200
// // 						theme ? theme : '')
// // 					}
// // 				/>
// // 			),
// // 		},
// // 	];
// // 	const [open, setOpen] = useState(false);
// // 	return (
// // 		<div
// // 			className={
// // 				(cn(
// // 					'mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border md:flex-row border-neutral-200 dark:border-neutral-700',
// // 					//bg-gray-100 dark:bg-neutral-800
// // 					// for your use case, use `h-screen` instead of `h-[60vh]`
// // 					'h-[60vh]'
// // 				),
// // 				theme ? theme : '')
// // 			}
// // 		>
// // 			<Sidebar open={open} setOpen={setOpen} animate={false}>
// // 				<SidebarBody className="justify-between gap-10">
// // 					<div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
// // 						<>
// // 							<Logo />
// // 						</>
// // 						<div className="mt-8 flex flex-col gap-2">
// // 							{links.map((link, idx) => (
// // 								<SidebarLink key={idx} link={link} />
// // 							))}
// // 						</div>
// // 					</div>
// // 					<div>
// // 						<SidebarLink
// // 							link={{
// // 								label: 'Manu Arora',
// // 								href: '#',
// // 								icon: (
// // 									<img
// // 										src="https://assets.aceternity.com/manu.png"
// // 										className="h-7 w-7 shrink-0 rounded-full"
// // 										width={50}
// // 										height={50}
// // 										alt="Avatar"
// // 									/>
// // 								),
// // 							}}
// // 						/>
// // 					</div>
// // 				</SidebarBody>
// // 			</Sidebar>
// // 			<Dashboard />
// // 		</div>
// // 	);
// // }
// // export default SidebarDemo;

// // export const Logo = () => {
// // 	const theme = useThemeStore();
// // 	return (
// // 		<a
// // 			href="#"
// // 			className={
// // 				('relative z-20 flex items-center space-x-2 py-1 text-sm font-normal ',
// // 				//text-black
// // 				theme ? theme : '')
// // 			}
// // 		>
// // 			<div
// // 				className={
// // 					('h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm ',
// // 					//bg-black dark:bg-white
// // 					theme ? theme : '')
// // 				}
// // 			/>
// // 			<motion.span
// // 				initial={{ opacity: 0 }}
// // 				animate={{ opacity: 1 }}
// // 				className={
// // 					('font-medium whitespace-pre ',
// // 					//text-black dark:text-white
// // 					theme ? theme : '')
// // 				}
// // 			>
// // 				Acet Labs
// // 			</motion.span>
// // 		</a>
// // 	);
// // };
// // export const LogoIcon = () => {
// // 	const theme = useThemeStore();
// // 	return (
// // 		<a
// // 			href="#"
// // 			className={
// // 				('relative z-20 flex items-center space-x-2 py-1 text-sm font-normal ',
// // 				theme ? theme : '')
// // 			}
// // 			//text-black
// // 		>
// // 			<div
// // 				className={
// // 					('h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm',
// // 					theme ? theme : '')
// // 				}
// // 			/>
// // 			{/* bg-black dark:bg-white */}
// // 		</a>
// // 	);
// // };

// // // Dummy dashboard component with content
// // const Dashboard = () => {
// // 	return (
// // 		<div className="flex flex-1">
// // 			<div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl p-2 md:p-10 ">
// // 				{/* dark:border-neutral-700 border-neutral-200 border*/}
// // 				{/* bg-white   dark:bg-neutral-900 */}
// // 				<div className="flex gap-2">
// // 					{[...new Array(4)].map((i, idx) => (
// // 						<div
// // 							key={'first-array-demo-2' + idx}
// // 							className="h-20 w-full animate-pulse rounded-lg "
// // 							// bg-gray-100 dark:bg-neutral-800
// // 						>
// // 							{/* <Routes>
// // 								<Route path="setting" element={<Setting />} />
// // 							</Routes> */}
// // 							{/* <Setting /> */}
// // 							<Theme />
// // 							{/* <Board /> */}
// // 						</div>
// // 					))}
// // 				</div>
// // 				<div className="flex flex-1 gap-2">
// // 					{[...new Array(2)].map((i, idx) => (
// // 						<div
// // 							key={'second-array-demo-2' + idx}
// // 							className="h-full w-full animate-pulse rounded-lg "
// // 							//bg-gray-100 dark:bg-neutral-800
// // 						></div>
// // 					))}
// // 				</div>
// // 			</div>
// // 		</div>
// // 	);
// // };

// // // import React from 'react';

// // // const DashBoard = () => {
// // // 	return (
// // // 		<div>
// // // 			<h1>this is dashboard haaaa</h1>
// // // 		</div>
// // // 	);
// // // };

// // // export default DashBoard;

// //////////////////////////////

// // 'use client';
// // import React, { useState } from 'react';
// // import { Sidebar, SidebarBody, SidebarLink } from '../components/ui/sidebar';
// // import {
// // 	HiArrowLeft,
// // 	HiOutlineCog,
// // 	HiUser,
// // 	HiOutlineViewGrid,
// // } from 'react-icons/hi';
// // import { motion } from 'motion/react';
// // import { cn } from '../lib/utils';

// // export function SidebarDemo() {
// // 	const links = [
// // 		{
// // 			label: 'Dashboard',
// // 			href: '#',
// // 			icon: (
// // 				<HiOutlineViewGrid className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
// // 			),
// // 		},
// // 		{
// // 			label: 'Profile',
// // 			href: '#',
// // 			icon: (
// // 				<HiUser className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
// // 			),
// // 		},
// // 		{
// // 			label: 'Settings',
// // 			href: '#',
// // 			icon: (
// // 				<HiOutlineCog className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
// // 			),
// // 		},
// // 		{
// // 			label: 'Logout',
// // 			href: '#',
// // 			icon: (
// // 				<HiArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
// // 			),
// // 		},
// // 	];
// // 	const [open, setOpen] = useState(false);
// // 	return (
// // 		<div
// // 			className={cn(
// // 				'mx-auto flex w-full max-w-7xl flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800',
// // 				'h-[60vh]' // change to `h-screen` for full screen layout
// // 			)}
// // 		>
// // 			<Sidebar open={open} setOpen={setOpen}>
// // 				<SidebarBody className="justify-between gap-10">
// // 					<div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
// // 						{open ? <Logo /> : <LogoIcon />}
// // 						<div className="mt-8 flex flex-col gap-2">
// // 							{links.map((link, idx) => (
// // 								<SidebarLink key={idx} link={link} />
// // 							))}
// // 						</div>
// // 					</div>
// // 					<div>
// // 						<SidebarLink
// // 							link={{
// // 								label: 'Manu Arora',
// // 								href: '#',
// // 								icon: (
// // 									<img
// // 										src="https://assets.aceternity.com/manu.png"
// // 										className="h-7 w-7 shrink-0 rounded-full"
// // 										width={50}
// // 										height={50}
// // 										alt="Avatar"
// // 									/>
// // 								),
// // 							}}
// // 						/>
// // 					</div>
// // 				</SidebarBody>
// // 			</Sidebar>
// // 			<Dashboard />
// // 		</div>
// // 	);
// // }

// // export const Logo = () => {
// // 	return (
// // 		<a
// // 			href="#"
// // 			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
// // 		>
// // 			<div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
// // 			<motion.span
// // 				initial={{ opacity: 0 }}
// // 				animate={{ opacity: 1 }}
// // 				className="font-medium whitespace-pre text-black dark:text-white"
// // 			>
// // 				Acet Labs
// // 			</motion.span>
// // 		</a>
// // 	);
// // };

// // export const LogoIcon = () => {
// // 	return (
// // 		<a
// // 			href="#"
// // 			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
// // 		>
// // 			<div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
// // 		</a>
// // 	);
// // };

// // // Dummy dashboard component with content
// // const Dashboard = () => {
// // 	return (
// // 		<div className="flex flex-1">
// // 			<div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
// // 				<div className="flex gap-2">
// // 					{[...new Array(4)].map((_, idx) => (
// // 						<div
// // 							key={'first-array-demo-1' + idx}
// // 							className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
// // 						></div>
// // 					))}
// // 				</div>
// // 				<div className="flex flex-1 gap-2">
// // 					{[...new Array(2)].map((_, idx) => (
// // 						<div
// // 							key={'second-array-demo-1' + idx}
// // 							className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
// // 						></div>
// // 					))}
// // 				</div>
// // 			</div>
// // 		</div>
// // 	);
// // };
// // export default Dashboard;

// /////////////////

import { AppSidebar } from '@/components/app_sidebar';
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
const Dashboard = () => {
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
};

export default Dashboard;
