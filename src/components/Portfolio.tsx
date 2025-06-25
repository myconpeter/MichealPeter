// Updated Portfolio.tsx
import { Link } from 'react-router';
import ArcticTelegram from '../assets/ArcticTelegram.png';
import SwiftBuy from '../assets/SwiftBuy.png';
import LinguaSpeak from '../assets/LinguaSpeak.png';
import FreeCodeCamp from '../assets/FreeCodeCamp.png';
import TravelPro from '../assets/TravelPro.png';
import Squeezy from '../assets/Squeezy.png';
import ArcticWeb from '../assets/ArcticWeb.png';
import Famssa from '../assets/Famssa.png';
import Tasty from '../assets/Tasty.png';
import ChatGpt from '../assets/ChatGpt.png';
import Pinnacle from '../assets/Pinnacle.png';
import Natural from '../assets/Natural.png';

interface Project {
	id: number;
	title: string;
	shortDesc: string;
	image: string;
	slug: string;
	type: 'AI' | 'SaaS' | 'E-commerce' | 'Web3' | 'Education' | 'Backend' | 'B2B' | 'Certificate';
	team: 'solo' | 'team' | 'lead';
	status: 'complete' | 'ongoing';
	impact?: string; // NEW: optional
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Arctic Telegram Mining Mini App',
		shortDesc:
			'Telegram Mini App for mining $ARCT tokens, referrals, tasks & wallet connection...',
		image: ArcticTelegram,
		slug: 'arctic-telegram-mini-app',
		type: 'Web3',
		team: 'lead',
		status: 'complete',
		impact: 'Over 3,000 user registered at the first month',
	},

	{
		id: 2,
		title: 'Swift Buy – Printer eCommerce Platform',
		shortDesc: 'An online store for printers & parts with cart, wishlist, and modern UI...',
		image: SwiftBuy,
		slug: 'swift-buy-ecommerce',
		type: 'E-commerce',
		team: 'solo',
		status: 'complete',
	},

	{
		id: 3,
		title: 'LinguaSpeak – AI Voice Translator',
		shortDesc:
			'AI-powered voice translator using Next.js and OpenAI for real-time language translation...',
		image: LinguaSpeak,
		slug: 'linguaspeak-ai-translator',
		type: 'AI',
		team: 'solo',
		status: 'ongoing',
	},
	{
		id: 4,
		title: 'FreeCodeCamp DSA Certification',
		shortDesc:
			'Completed JavaScript Algorithms & DSA course with hands-on challenges and certification...',
		image: FreeCodeCamp,
		slug: 'freecodecamp-dsa-cert',
		type: 'Certificate',
		team: 'solo',
		status: 'complete',
	},
	{
		id: 5,
		title: 'Travel Pro – Flight & Logistics Platform',
		shortDesc: 'Robust ticketing and logistics website built with EJS, Express, and MongoDB...',
		image: TravelPro,
		slug: 'travel-pro-ticketing',
		type: 'SaaS',
		team: 'solo',
		status: 'complete',
	},
	{
		id: 6,
		title: 'Squeezy API – Secure & Scalable Backend',
		shortDesc: 'Robust backend API with advanced authentication and modular architecture...',
		image: Squeezy,
		slug: 'squeezy-api-backend',
		type: 'Backend',
		team: 'solo',
		status: 'ongoing',
	},
	{
		id: 7,
		title: 'Arctic Web Mine',
		shortDesc:
			'As Project Manager, I led the development of Arctic Web Mine — a futuristic Ethereum mining platform...',
		image: ArcticWeb,
		slug: 'arctic-web-mine',
		type: 'Web3',
		status: 'complete',
		team: 'lead',
		impact: 'Thousand of users on the first month of launch',
	},
	{
		id: 8,
		title: 'FAMSSA E-Library',
		shortDesc: 'E-library platform for FAMSSA students with admin & reader modes...',
		image: Famssa,
		slug: 'famssa-elibrary',
		type: 'Education',
		team: 'solo',
		status: 'complete',
		impact: 'Help Hundreds of Student get access to learnable platform',
	},
	{
		id: 9,
		title: 'Tasty - Food E-Commerce',
		shortDesc: 'Responsive food ordering platform with sleek UI and cart features...',
		image: Tasty,
		slug: 'tasty-food-app',
		type: 'E-commerce',
		team: 'solo',
		status: 'complete',
	},
	{
		id: 10,
		title: 'ChatGPT Clone',
		shortDesc:
			'An AI chat app replicating OpenAI’s ChatGPT with modern UI and real-time NLP...',
		image: ChatGpt,
		slug: 'chatgpt-clone',
		type: 'AI',
		team: 'solo',
		status: 'ongoing',
	},
	{
		id: 11,
		title: 'Pinnacle Education',
		shortDesc:
			'A global ed-tech platform for Pinnacle Education, built for accessibility and reach...',
		image: Pinnacle,
		slug: 'pinnacle-education',
		type: 'Education',
		team: 'solo',
		status: 'complete',
	},
	{
		id: 12,
		title: 'Your Natural Health',
		shortDesc:
			'A natural healing platform connecting practitioners and patients across the world...',
		image: Natural,
		slug: 'your-natural-health',
		team: 'solo',
		type: 'B2B',
		status: 'complete',
		impact: 'Received Message from over 3000 + client on the first 6 month of launching',
	},
];

const Portfolio = () => {
	return (
		<section
			id='Portfolio'
			className='bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-black dark:to-zinc-900 text-black dark:text-white py-20 px-4'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent'>
						✨ My Projects
					</h2>
					<p className='mt-4 text-gray-600 dark:text-gray-300'>
						Real-world apps I've built using modern tools.
					</p>
				</div>

				<div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
					{projects.map(({ id, title, shortDesc, image, slug, type, status, impact }) => (
						<div
							key={id}
							className='group rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 transition hover:scale-[1.03] hover:shadow-2xl duration-300'>
							<img
								src={image}
								alt={title}
								className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
							/>

							<div className='p-5 space-y-3'>
								<h3 className='text-xl font-bold text-zinc-800 dark:text-white'>
									{title}
								</h3>
								<p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-3'>
									{shortDesc}
								</p>

								<div className='flex flex-wrap gap-2 mt-2 text-xs'>
									<span className='bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium'>
										{type}
									</span>
									<span className='bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium'>
										{status}
									</span>
								</div>

								{impact && (
									<p className='text-xs text-green-500 italic mt-2'>
										📈 {impact}
									</p>
								)}

								<Link
									to={`/projects/${slug}`}
									className='inline-block mt-4 text-cyan-600 dark:text-cyan-400 font-semibold hover:underline'>
									See More →
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
