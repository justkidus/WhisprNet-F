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
import HeaderBar from '../components/HeaderBar';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();
	return (
		<SidebarProvider
			style={{
				'--sidebar-width': '350px',
			}}
		>
			{isMobile ? (
				// Mobile View
				!selectedUser ? (
					<HeaderBar />
				) : (
					<>
						<div className="flex flex-col h-screen">
							<header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
								<button
									onClick={() => navigate(-1)}
									className="p-2 hover:bg-gray-100 rounded-full"
								>
									<ArrowLeft className="h-5 w-5" />
								</button>
								<h1 className="font-medium">{selectedUser.fullName}</h1>
							</header>
							<main className="flex-1 overflow-y-auto">
								<ChatContainer />
							</main>
							<footer className="border-2">
								<MessageInput />
							</footer>
						</div>
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
