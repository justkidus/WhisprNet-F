import { useAuthStore } from '@/store/useAuthstore';
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
const Navbar = () => {
	const { logout, authUser } = useAuthStore();
	return (
		<header className="">
			<div className="p-[20px] mx-[60px] ">
				<div className="flex justify-between items-center">
					<div className="text-[20px]">
						<Link to="/welcome" className="text-lg font-bold">
							WhisprNet
						</Link>
					</div>
					{/* <div className="flex gap-[15px]">
						<div>
							{' '}
							<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-xl">
								<Link
									to={'/setting'}
									className={'btn btn-sm gap-2 transition-colors'}
								>
									Setting
								</Link>
							</button>
						</div>
						<div className="flex gap-[15px]">
							{authUser ? (
								<>
									<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-xl">
										<Link
											to={'/profile'}
											className={'btn btn-sm gap-2 transition-colors'}
										>
											Profile
										</Link>
									</button>
									<button
										className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-xl"
										onClick={logout}
									>
										Logout
									</button>
								</>
							) : (
								' '
							)}
						</div> */}
					{/* </div> */}
				</div>
			</div>
		</header>
	);
};
export default Navbar;
