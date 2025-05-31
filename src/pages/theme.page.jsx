import React from 'react';
import { useThemeStore } from '../store/useThemestore';
import { Send } from 'lucide-react';
import { THEMES } from '../constants/themes';

const PREVIEW_MESSAGES = [
	{ id: 1, content: "Hey! How's it going", isSent: false },
	{
		id: 2,
		content: "I'm doing great! Just working on some new features.",
		isSent: true,
	},
];

const Theme = () => {
	const { theme, setTheme } = useThemeStore();

	return (
		<div className="w-screen min-h-screen flex flex-col md:flex-row gap-10 p-4 overflow-x-hidden">
			{/* Theme Selector */}
			<div className="w-full md:w-[45%]">
				<h2 className="mb-6 text-lg font-semibold">Choose your theme</h2>
				<div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-5 md-gap-2 gap-4">
					{THEMES.map((themes) => (
						<button
							key={themes}
							className={`w-[80px] group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
								theme === themes ? 'bg-base-200' : 'hover:bg-base-200/50'
							}`}
							onClick={() => setTheme(themes)}
						>
							<div
								className="relative h-8 w-full rounded-md overflow-hidden"
								data-theme={themes}
							>
								<div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
									<div className="rounded bg-primary"></div>
									<div className="rounded bg-secondary"></div>
									<div className="rounded bg-accent"></div>
									<div className="rounded bg-neutral"></div>
								</div>
							</div>
							<span className="text-[11px] font-medium truncate w-full text-center">
								{themes.charAt(0).toUpperCase() + themes.slice(1)}
							</span>
						</button>
					))}
				</div>
			</div>

			{/* Chat Preview */}
			<div className="w-full md:w-[50%]">
				<h3 className="text-lg font-semibold mb-3">Preview</h3>
				<div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg w-full max-w-[500px]">
					<div className="p-4 bg-base-200">
						<div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
							{/* Chat Header */}
							<div className="px-4 py-3 border-b border-base-300 bg-base-100">
								<div className="flex items-center gap-3">
									<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
										J
									</div>
									<div>
										<h3 className="font-medium text-sm">John Doe</h3>
										<p className="text-xs text-base-content/70">Online</p>
									</div>
								</div>
							</div>

							{/* Chat Messages */}
							<div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
								{PREVIEW_MESSAGES.map((message) => (
									<div
										key={message.id}
										className={`flex ${
											message.isSent ? 'justify-end' : 'justify-start'
										}`}
									>
										<div
											className={`max-w-[80%] rounded-xl p-3 shadow-sm ${
												message.isSent
													? 'bg-primary text-primary-content'
													: 'bg-base-200'
											}`}
										>
											<p className="text-sm">{message.content}</p>
											<p
												className={`text-[10px] mt-1.5 ${
													message.isSent
														? 'text-primary-content/70'
														: 'text-base-content/70'
												}`}
											>
												12:00 PM
											</p>
										</div>
									</div>
								))}
							</div>

							{/* Chat Input */}
							<div className="p-4 border-t border-base-300 bg-base-100">
								<div className="flex gap-2">
									<input
										type="text"
										className="input input-bordered flex-1 text-sm h-10"
										placeholder="Type a message..."
										value="This is a preview"
										readOnly
									/>
									<button className="btn btn-primary h-10 min-h-0">
										<Send size={18} />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Theme;
