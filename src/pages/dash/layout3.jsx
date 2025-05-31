import { ChatHeader } from '@/components/chat/chatArea';
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ChatArea } from '@/components/chat/chatArea';
import { SidebarDemo } from '@/components/sidebarDemo';
import Dashboard from '../dash.board';
const Layout3 = ({ children }) => {
	return (
		<div className="">
			<ChatArea />
			<main>{children}</main>
		</div>
	);
};

export default Layout3;
