import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
	SidebarRail,
	SidebarInput,
} from '@/components/ui/sidebar';
import { AppSidebar } from '../../components/app_sidebar';
import Navbar from '@/components/Navbar';

export default function Layout({ children }) {
	return (
		<>
			{/* <Navbar /> */}

			<SidebarProvider>
				<div className="min-h-screen relative">
					{/* Sidebar as overlay */}
					<div className="flex-col">
						<AppSidebar className="fixed top-0 left-0 h-full z-50" />
					</div>

					{/* Main content underneath */}
					<main className="relative">
						<SidebarTrigger className="fixed z-50 mr-[100px]" />

						{children}
					</main>
				</div>
			</SidebarProvider>
		</>
	);
}
