import { useNavigate } from 'react-router-dom';
import { useGroupChatStore } from '@/store/useGroupChatStore';
import { useChatstore } from '@/store/useChatstore';
import { useState } from 'react';
import { Label } from '../components/ui/label';
import { Input0 } from '../components/ui/input0';
import { Button } from '@/components/ui/button';
import { cn } from '../lib/utilis3';

export default function CreateGroup() {
	const [form, setForm] = useState({
		name: '',
		// admin: '',
		members: [],
	});
	const { createGroup } = useGroupChatStore();
	const { users } = useChatstore();

	const handleCreateGroup = (e) => {
		e.preventDefault();
		createGroup(form);
	};
	const nav = useNavigate();
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
			<div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md text-center">
				<h1 className="text-2xl font-bold mb-4">Create Group</h1>

				<form className="my-8" onSubmit={handleCreateGroup}>
					<LabelInputContainer className="mb-4">
						<Label htmlFor="GroupName">Group Name</Label>
						<Input0
							id="GroupName"
							placeholder="projectmayhem@fc.com"
							type="name"
							value={form.name}
							onChange={(e) => setForm({ ...form, name: e.target.value })}
						/>
					</LabelInputContainer>
					{/* <LabelInputContainer className="mb-4">
						<Label htmlFor="admin">Choose Admin</Label>
						<select
							id="admin"
							value={form.admin}
							onChange={(e) => setForm({ ...form, admin: e.target.value })}
							className="border px-2 py-1"
						>
							<option value="">-- Select Admin --</option>
							{users.map((user) => (
								<option key={user._id} value={user._id}>
									{user.fullName}
								</option>
							))}
						</select>
					</LabelInputContainer> */}

					<LabelInputContainer className="mb-4">
						<Label>Select Members</Label>
						<div className="grid gap-2 h-[60vh] overflow-y-auto">
							{users.map((user) => (
								<label key={user._id} className="flex items-center space-x-2">
									<input
										type="checkbox"
										value={user._id}
										checked={form.members.includes(user._id)}
										onChange={(e) => {
											const selectedId = e.target.value;
											setForm((prev) => ({
												...prev,
												members: prev.members.includes(selectedId)
													? prev.members.filter((id) => id !== selectedId)
													: [...prev.members, selectedId],
											}));
										}}
									/>
									<span>{user.fullName}</span>
								</label>
							))}
						</div>
					</LabelInputContainer>
					<Button type="submit" className="mt-4">
						Create Group
					</Button>
				</form>

				<button
					onClick={() => nav('/')}
					className="mt-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
				>
					Close
				</button>
			</div>
		</div>
	);
}

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn('flex w-full flex-col space-y-2', className)}>
			{children}
		</div>
	);
};
