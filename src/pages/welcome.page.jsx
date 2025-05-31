'use client';
import { ThreeDMarquee } from '../components/aceternity/3D Marquee';
import { PulsatingButton } from '@/components/magicui/pulsating-button';
import { Link } from 'react-router-dom';
const welcomepage = () => {
	const images = [
		'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
		'https://assets.aceternity.com/animated-modal.png',
		'https://assets.aceternity.com/animated-testimonials.webp',
		'https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png',
		'https://assets.aceternity.com/github-globe.png',
		'https://assets.aceternity.com/glare-card.png',
		'https://assets.aceternity.com/layout-grid.png',
		'https://assets.aceternity.com/flip-text.png',
		'https://assets.aceternity.com/hero-highlight.png',
		'https://assets.aceternity.com/carousel.webp',
		'https://assets.aceternity.com/placeholders-and-vanish-input.png',
		'https://assets.aceternity.com/shooting-stars-and-stars-background.png',
		'https://assets.aceternity.com/signup-form.png',
		'https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png',
		'https://assets.aceternity.com/spotlight-new.webp',
		'https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png',
		'https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png',
		'https://assets.aceternity.com/tabs.png',
		'https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png',
		'https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png',
		'https://assets.aceternity.com/glowing-effect.webp',
		'https://assets.aceternity.com/hover-border-gradient.png',
		'https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png',
		'https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png',
		'https://assets.aceternity.com/macbook-scroll.png',
		'https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png',
		'https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png',
		'https://assets.aceternity.com/multi-step-loader.png',
		'https://assets.aceternity.com/vortex.png',
		'https://assets.aceternity.com/wobble-card.png',
		'https://assets.aceternity.com/world-map.webp',
	];
	return (
		// <div className="mx-auto max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
		// 	<ThreeDMarquee images={images} />
		// </div>
		<div className="relative w-full min-h-screen max-h-[80%] overflow-y-hidden">
			<ThreeDMarquee images={images} />

			{/* Blurred welcome box */}
			<div className="absolute inset-0 flex items-center justify-center z-10">
				<div className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-[70px]  py-[40px] md:px-[150px] md:py-[100px] rounded-xl shadow-xl">
					<h1 className="text-xl md:text-3xl font-semibold">
						Welcome to WhisprNet
					</h1>
					<br />
					<div className="items-center flex justify-center">
						<PulsatingButton>
							<Link to="signup">Join Us</Link>
						</PulsatingButton>
					</div>
				</div>
			</div>
		</div>
	);
};
export default welcomepage;
