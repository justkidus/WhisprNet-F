// import { AppSidebar } from '@/components/app-sidebar';
// import {
// 	Breadcrumb,
// 	BreadcrumbItem,
// 	BreadcrumbLink,
// 	BreadcrumbList,
// 	BreadcrumbPage,
// 	BreadcrumbSeparator,
// } from '@/components/ui/breadcrumb';
// import { Separator } from '@/components/ui/separator';
// import {
// 	SidebarInset,
// 	SidebarProvider,
// 	SidebarTrigger,
// } from '@/components/ui/sidebar';
// import { useChatstore } from '@/store/useChatstore';
// import ChatContainer from './ChatContainer';
// import MessageInput from './MessageInput';
// import { useState, useEffect } from 'react';
// export default function Page() {
// 	const [isMobile, setIsMobile] = useState(false);
// 	const handleResize = () => setIsMobile(window.innerWidth < 768);
// 	handleResize();
// 	window.addEventListener('resize', handleResize);
// 	return () => window.removeEventListener('resize', handleResize);
// 	const { selectedUser, setSelectedUser } = useChatstore();
// 	console.log('this ', selectedUser);
// 	return (
// 		<SidebarProvider
// 			style={{
// 				'--sidebar-width': '350px',
// 			}}
// 		>
// 			<AppSidebar />
// 			<SidebarInset>
// 				{selectedUser ? (
// 					<>
// 						<header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
// 							<SidebarTrigger className="-ml-1" />
// 							<Separator orientation="vertical" className="mr-2 h-4" />
// 							{/* <Breadcrumb>
// 								<BreadcrumbList>
// 									<BreadcrumbItem className="hidden md:block">
// 										<BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
// 									</BreadcrumbItem>
// 									<BreadcrumbSeparator className="hidden md:block" />
// 									<BreadcrumbItem>
// 										<BreadcrumbPage>Inbox</BreadcrumbPage>
// 									</BreadcrumbItem>
// 								</BreadcrumbList>
// 							</Breadcrumb> */}
// 							<h1>{selectedUser.fullName}</h1>
// 						</header>
// 						<main className="h-[80vh]">
// 							<ChatContainer />
// 						</main>
// 						<footer className="border-2">
// 							<MessageInput />
// 						</footer>
// 					</>
// 				) : (

// 					{isMobile ? (
// 						!selectedUser ? (
// 							<AppSidebar />
// 						) : (
// 							<div className="flex flex-1 flex-col gap-4 p-4 text-black">
// 								<h1>hassssssssssss</h1>
// 							</div>
// 						)
// 					) : (
// 						<div className="flex flex-1 flex-col gap-4 p-4 text-black">
// 							<h1>hassssssssssss</h1>
// 						</div>
// 					)}
// 				)
// 			</SidebarInset>
// 		</SidebarProvider>
// 	);
// }

'use client';

import { useEffect, useState } from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import {
	SidebarProvider,
	SidebarTrigger,
	SidebarInset,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { useChatstore } from '@/store/useChatstore';
import ChatContainer from './ChatContainer';
import MessageInput from './MessageInput';

export default function Page() {
	const [isMobile, setIsMobile] = useState(false);
	const { selectedUser } = useChatstore();

	// Handle screen resizing
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		handleResize(); // Initial check
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<SidebarProvider
			style={{
				'--sidebar-width': '350px',
			}}
		>
			{isMobile ? (
				// Mobile View
				!selectedUser ? (
					<AppSidebar />
				) : (
					<>
						<header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<h1 className="font-medium">{selectedUser.fullName}</h1>
						</header>
						<main className="h-[80vh]">
							<ChatContainer />
						</main>
						<footer className="border-2">
							<MessageInput />
						</footer>
					</>
				)
			) : (
				// Desktop View
				<>
					<AppSidebar />
					<SidebarInset>
						{selectedUser ? (
							<>
								<header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
									<SidebarTrigger className="-ml-1" />
									<Separator orientation="vertical" className="mr-2 h-4" />
									<h1 className="font-medium">{selectedUser.fullName}</h1>
								</header>
								<main className="h-[80vh]">
									<ChatContainer />
								</main>
								<footer className="border-2">
									<MessageInput />
								</footer>
							</>
						) : (
							<div className="flex flex-1 flex-col gap-4 p-4 text-muted-foreground">
								<h1 className="text-xl font-semibold">Select a conversation</h1>
								<p className="text-sm">Choose a user to start chatting.</p>
							</div>
						)}
					</SidebarInset>
				</>
			)}
		</SidebarProvider>
	);
}
