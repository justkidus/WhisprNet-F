'use client';

import {
	BadgeCheck,
	Bell,
	ChevronsUpDown,
	CreditCard,
	LogOut,
	Sparkles,
} from 'lucide-react';

import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '@/components/ui/dialog';

import { useAuthStore } from '@/store/useAuthstore';

export function NavUser() {
	const { isMobile } = useSidebar();
	const { logout, isLoggingOut, authUser } = useAuthStore();

	const [showDialog, setShowDialog] = useState(false);

	return (
		<>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground md:h-8 md:p-0"
							>
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage
										src={authUser.profilePic}
										alt={authUser.fullName}
									/>
									<AvatarFallback className="rounded-lg">
										{authUser.profilePic}
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">
										{authUser.fullName}
									</span>
									<span className="truncate text-xs">{authUser.email}</span>
								</div>
								<ChevronsUpDown className="ml-auto size-4" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="min-w-56 rounded-lg"
							side={isMobile ? 'bottom' : 'right'}
							align="end"
							sideOffset={4}
						>
							<DropdownMenuLabel className="p-0 font-normal">
								<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
									<Avatar className="h-8 w-8 rounded-lg">
										<AvatarImage
											src={authUser.profilePic}
											alt={authUser.fullName}
										/>
										<AvatarFallback className="rounded-lg">
											{authUser.profilePic}
										</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">
											{authUser.fullName}
										</span>
										<span className="truncate text-xs">{authUser.email}</span>
									</div>
								</div>
							</DropdownMenuLabel>

							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<Sparkles className="mr-2 size-4" />
									Upgrade to Pro
								</DropdownMenuItem>
							</DropdownMenuGroup>

							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<BadgeCheck className="mr-2 size-4" />
									Account
								</DropdownMenuItem>
								<DropdownMenuItem>
									<CreditCard className="mr-2 size-4" />
									Billing
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Bell className="mr-2 size-4" />
									Notifications
								</DropdownMenuItem>
							</DropdownMenuGroup>

							<DropdownMenuSeparator />

							<DropdownMenuItem onClick={() => setShowDialog(true)}>
								<LogOut className="mr-2 size-4" />
								Log out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>

			{/* Dialog rendered outside menu */}
			<Dialog open={showDialog} onOpenChange={setShowDialog}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you sure you want to log out?</DialogTitle>
					</DialogHeader>
					<DialogFooter className="flex flex-row justify-end gap-2">
						<button
							onClick={() => {
								logout();
								setShowDialog(false);
							}}
							className="px-4 py-2 text-white bg-red-600 rounded-md"
						>
							Yes, log out
						</button>
						<button
							onClick={() => setShowDialog(false)}
							className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
						>
							Cancel
						</button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
