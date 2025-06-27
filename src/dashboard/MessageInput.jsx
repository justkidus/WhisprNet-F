import React, { useState, useEffect, useRef } from 'react';
import { useChatstore } from '@/store/useChatstore';
import { X, Image, Send } from 'lucide-react';

const MessageInput = () => {
	const textAreaRef = useRef(null);
	const [text, setText] = useState('');
	const [imagePreview, setImagePreview] = useState(null);
	const fileInputRef = useRef(null);
	const { sendMessage } = useChatstore();
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (!file.type.startsWith('image/')) {
			toast.error('please select an image file');
			return;
		}
		const reader = new FileReader();
		reader.onloadend = () => {
			setImagePreview(reader.result);
		};
		reader.readAsDataURL(file);
	};
	const removeImage = () => {
		setImagePreview(null);
		if (fileInputRef.current) fileInputRef.current.value = '';
	};
	const handleSendMessage = async (e) => {
		e.preventDefault();
		if (!text.trim() && !imagePreview) return;
		try {
			await sendMessage({
				text: text.trim(),
				image: imagePreview,
			});
			//clear from
			setText('');
			setImagePreview(null);
			if (fileInputRef.current) fileInputRef.current.value = '';
		} catch (error) {
			console.error('failed to send message :', error);
		}
	};

	const autoResize = () => {
		const el = textAreaRef.current;
		if (!el) return;
		el.style.height = 'auto';
		el.style.height = el.scrollHeight + 'px';
	};
	useEffect(() => {
		autoResize();
	}, [text]);
	return (
		<>
			{imagePreview && (
				<div className="mb-[-30px] flex items-center gap-2">
					<div className="relative">
						<img
							src={imagePreview}
							alt="preview"
							className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
						/>
						<button
							onClick={removeImage}
							className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300 flex items-center justify-center"
							type="button"
						>
							<X className="size-3" />
						</button>
					</div>
				</div>
			)}
			<div className="w-full">
				<form
					onSubmit={handleSendMessage}
					className="flex items-center w-full absolute"
				>
					<div className="flex-1 flex gap-2">
						<textarea
							ref={textAreaRef}
							className="w-full textarea textarea-bordered rounded-lg textarea-sm sm:textarea-md break-words max-w-[auto] max-h-[9vh] outline-0"
							placeholder="Type a message..."
							value={text}
							onChange={(e) => setText(e.target.value)}
						/>
						<input
							type="file"
							accept="image/*"
							className="hidden"
							ref={fileInputRef}
							onChange={handleImageChange}
						/>
						<button
							type="button"
							className={` sm:flex btn btn-circle ${
								imagePreview ? 'text-emerald-500' : 'text-zinc-400'
							}`}
							onClick={() => fileInputRef.current?.click()}
						>
							{' '}
							<Image size={24} />{' '}
						</button>
						<button
							type="submit"
							className="btn btn-sm btn-circle"
							disabled={!text.trim() && !imagePreview}
						>
							<Send size={22} />
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default MessageInput;
