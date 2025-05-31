import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarDemo } from '@/components/sidebarDemo';
export default function Layout2({ children }) {
	return (
		<>
			<SidebarProvider>
				<SidebarDemo />
				<main>{children}</main>
			</SidebarProvider>
		</>
	);
}
