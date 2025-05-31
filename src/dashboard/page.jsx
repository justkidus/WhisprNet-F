import { AppSidebar } from '@/components/app-sidebar';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { useChatstore } from '@/store/useChatstore';
import ChatContainer from './ChatContainer';
import MessageInput from './MessageInput';
export default function Page() {
	const { selectedUser, setSelectedUser } = useChatstore();
	console.log('this ', selectedUser);
	return (
		<SidebarProvider
			style={{
				'--sidebar-width': '350px',
			}}
		>
			<AppSidebar />
			<SidebarInset>
				{selectedUser ? (
					<>
						<header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="mr-2 h-4" />
							{/* <Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem className="hidden md:block">
										<BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator className="hidden md:block" />
									<BreadcrumbItem>
										<BreadcrumbPage>Inbox</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb> */}
							<h1>{selectedUser.fullName}</h1>
						</header>
						<main className="h-[80vh]">
							<ChatContainer />
						</main>
						<footer className="border-2">
							<MessageInput />
						</footer>
					</>
				) : (
					<>
						<div className="flex flex-1 flex-col gap-4 p-4 text-black">
							<h1>hassssssssssss</h1>
						</div>
					</>
				)}
			</SidebarInset>
		</SidebarProvider>
	);
}
