import { useAuthStore } from '@/store/useAuthstore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LogoutPage = () => {
	const [showModal, setShowModal] = useState(true);
	const { logout } = useAuthStore();
	const handleLogout = () => {
		// Logic to logout (e.g., clear cookies or token)
		console.log('Logging out...');
		nav('/login');
		setShowModal(false); // Close the modal after logout
	};
	const nav = useNavigate();
	return (
		<div className="h-screen flex items-center justify-center bg-gray-200">
			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<div className="bg-black text-white p-6 rounded-lg w-96">
						<p className="text-center text-lg mb-4">
							Are you sure you want to logout?
						</p>
						<div className="flex justify-between">
							<button
								onClick={() => nav('/')}
								className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
							>
								Cancel
							</button>
							<button
								onClick={() => {
									logout();
									handleLogout();
								}}
								className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
							>
								Sure
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default LogoutPage;
