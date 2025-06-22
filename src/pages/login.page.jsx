'use client';
import React, { useState, useEffect } from 'react';
import { Label } from '../components/ui/label';
import { Input0 } from '../components/ui/input0';
import { cn } from '../lib/utilis3';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthstore';

const Login = () => {
	const [formData, setformData] = useState({
		email: '',
		password: '',
	});
	const { login, isLoggingIn, authUser } = useAuthStore();
	const [showPassword, setShowPassword] = useState(false);
	const nav = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(formData);
	};

	useEffect(() => {
		if (authUser) {
			nav('/');
		}
	}, [authUser, nav]);

	return (
		<div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
			<h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
				Welcome to Whispr-Net
			</h2>
			<p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
				Login to Chattey if you can because we don&apos;t have a login flow yet
			</p>

			<form className="my-8" onSubmit={handleSubmit}>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="email">Email Address</Label>
					<Input0
						id="email"
						placeholder="projectmayhem@fc.com"
						type="email"
						value={formData.email}
						onChange={(e) =>
							setformData({ ...formData, email: e.target.value })
						}
					/>
				</LabelInputContainer>

				<LabelInputContainer className="mb-4">
					<Label htmlFor="password">Password</Label>
					<div className="relative">
						<Input0
							id="password"
							placeholder="••••••••"
							type={showPassword ? 'text' : 'password'}
							value={formData.password}
							onChange={(e) =>
								setformData({ ...formData, password: e.target.value })
							}
							className="pr-10"
						/>
						<button
							type="button"
							className="absolute right-2 top-1/2 -translate-y-1/2 text-base-content/40"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? (
								<EyeOff className="size-5" />
							) : (
								<Eye className="size-5" />
							)}
						</button>
					</div>
				</LabelInputContainer>

				<button
					className="group/btn relative flex h-10 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
					type="submit"
					disabled={isLoggingIn}
				>
					{isLoggingIn ? (
						<>
							<Loader2 className="size-5 animate-spin" />
							<span>Logging in...</span>
						</>
					) : (
						<>
							Login &rarr;
							<BottomGradient />
						</>
					)}
				</button>
			</form>
		</div>
	);
};

const BottomGradient = () => {
	return (
		<>
			<span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
			<span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
		</>
	);
};

const LabelInputContainer = ({ children, className }) => {
	return (
		<div className={cn('flex w-full flex-col space-y-2', className)}>
			{children}
		</div>
	);
};

export default Login;
