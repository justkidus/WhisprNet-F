'use client';

import { useEffect, useState } from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import {
	SidebarProvider,
	SidebarTrigger,
	SidebarInset,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { useGroupChatStore } from '@/store/useGroupChatStore';
import GroupChatContainer from '@/dashboard/GroupChatContainer';
import GroupMessageInput from '@/dashboard/GroupMessageInput';
import HeaderBar from '@/components/HeaderBar';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function GroupPage() {
	const [isMobile, setIsMobile] = useState(false);
	const { groups, Allgroups, setSelectedGroup, selectedGroup, isGroupLoading } =
		useGroupChatStore();
	// Handle screen resizing
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		handleResize(); // Initial check
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const navigate = useNavigate();
	return (
		<SidebarProvider
			style={{
				'--sidebar-width': '350px',
			}}
		>
			{isMobile ? (
				// Mobile View
				!selectedGroup ? (
					// <AppSidebar />
					<HeaderBar />
				) : (
					<>
						<div className="flex flex-col w-full h-screen">
							<header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
								<button
									onClick={() => navigate(-1)}
									className="p-2 hover:bg-gray-100 rounded-full"
								>
									<ArrowLeft className="h-5 w-5" />
								</button>
								<h1 className="font-medium">{selectedGroup.name}</h1>
							</header>
							<main className="flex-1 overflow-y-auto">
								<GroupChatContainer />
							</main>
							<footer className="border-2">
								<GroupMessageInput />
							</footer>
						</div>
					</>
				)
			) : (
				// Desktop View
				<>
					<AppSidebar />
					<SidebarInset>
						{selectedGroup ? (
							<>
								<header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
									<SidebarTrigger className="-ml-1" />
									<Separator orientation="vertical" className="mr-2 h-4" />
									<h1 className="font-medium">{selectedGroup.name}</h1>
								</header>
								<main className="h-[80vh]">
									<GroupChatContainer />
								</main>
								<footer className="border-2">
									<GroupMessageInput />
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
