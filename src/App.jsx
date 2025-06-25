import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
// import SettingPage from './pages/theme.page';
import { useThemeStore } from './store/useThemestore';
import WelcomePage from './pages/welcome.page';
import Login from './pages/login.page';
import Signup from './pages/signup.page';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/useAuthstore';
import { Loader } from 'lucide-react';
import Setting from './pages/setting.page';
// import SidebarDemo from './pages/dash.board';
// import Setting from './pages/setting.page';
import { useChatstore } from './store/useChatstore';
import LogoutPage from './pages/logout';
import Page from './dashboard/page';
import ChatPage from './pages/chatPage';
import GroupPage from './dashboard/GroupPage';
import CreateGroup from './dashboard/CreateGroup';
function App() {
	const { selectedUser } = useChatstore();
	const location = useLocation();
	const { theme } = useThemeStore();
	const { checkAuth, authUser, isCheckingAuth, onlineUsers } = useAuthStore();

	const hideNavbarRoutes = [
		'/allchats',
		'/users',
		'/allchats/:id',
		'/group/:id',
	];
	const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

	console.log({ onlineUsers });
	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth && !authUser) {
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	}
	console.log('this authuser', authUser);
	return (
		<div
			data-theme={theme}
			className="min-h-screen max-h-screen overflow-y-hidden"
		>
			{shouldHideNavbar && <Navbar />}

			<div className="">
				<Routes>
					<Route
						path="/welcome"
						element={!authUser ? <WelcomePage /> : <Page />}
					/>
					<Route path="/setting" element={<Setting />} />
					<Route path="/welcome/login" element={<Login />} />
					{/* <Route
						path="/chat/:userId"
						element={
							authUser ? (
								<div
									className="bg-base-100 text-base-content rounded-lg"
									data-theme={theme}
								>
									<Page />
								</div>
							) : (
								<Navigate to="/welcome/signup" />
							)
						}
					/> */}
					<Route
						path="/welcome/signup"
						element={
							<div className="" data-theme={theme}>
								<Signup />
							</div>
						}
					/>
					<Route
						path="/"
						element={
							authUser ? (
								<div
									className="bg-base-100 text-base-content rounded-lg"
									data-theme={theme}
								>
									<Page />
								</div>
							) : (
								<Navigate to="/welcome/signup" />
							)
						}
					/>
					{/* <Route
						path="/allchats"
						element={
							authUser ? (
								<div
									className="bg-base-100 text-base-content rounded-lg"
									data-theme={theme}
								>
									<Page />
								</div>
							) : (
								<Navigate to="/welcome/signup" />
							)
						}
					/> */}
					{/* <Route
						path="/users"
						element={
							authUser ? (
								<div
									className="bg-base-100 text-base-content rounded-lg"
									data-theme={theme}
								>
									<Page />
								</div>
							) : (
								<Navigate to="/welcome/signup" />
							)
						}
					/> */}
					<Route
						path="/allchats/:id"
						element={
							authUser ? (
								<div className="">
									<Page />
								</div>
							) : (
								<Navigate to="/welcome/signup" />
							)
						}
					/>

					<Route
						path="/groups/:id"
						element={
							authUser ? (
								<div className="">
									<GroupPage />
								</div>
							) : (
								<Navigate to="/welcome/signup" />
							)
						}
					/>
					<Route path="/logout" element={<LogoutPage />} />
					<Route path="/createGroup" element={<CreateGroup />} />
				</Routes>
			</div>
			<Toaster />
		</div>
	);
}

export default App;
