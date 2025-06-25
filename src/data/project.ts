// src/data/projects.ts
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

export interface Project {
	slug: string;
	title: string;
	stack: string[];
	description: string;
	challenges: string;
	learnings: string;
	github: string;
	demo: string;
	image: string;
	impact?: string;
}

export const projects: Project[] = [
	{
		slug: 'arctic-telegram-mini-app',
		title: 'Arctic Telegram Mining Mini App',
		stack: [
			'React',
			'JavaScript',
			'React Router',
			'TailwindCSS',
			'Telegram API',
			'Node.js',
			'MongoDB',
			'Telegraf',
			'jsonwebtoken',
			'@telegram-apps/init-data-node',
		],
		description:
			'As Project Manager, I led the development feature-rich Telegram Mini App that allows users to mine the $ARCT token, complete tasks for points, refer other users, and securely connect their TON or Telegram Wallets. This app seamlessly integrates the Telegram interface for a native user experience and provides real-time user tracking and task engagement.',
		challenges:
			'Integrating deeply with Telegram’s API and authentication system was one of the biggest hurdles. From validating users with Telegram init data to maintaining secure sessions with tokens, and handling Telegram WebApp callbacks — each required precise coordination between the frontend, backend, and Telegram itself. Ensuring smooth wallet connection and managing user task completion data in real-time was also quite challenging.',
		learnings:
			'I gained hands-on experience in developing Telegram Mini Apps, handling Telegram authentication with secure practices, and building a robust backend using Node.js with JWT. On the frontend, I improved my TailwindCSS and animation skills, focusing on sleek micro-interactions and responsive designs that feel intuitive within the Telegram environment. I also sharpened my debugging and API integration workflow under production-like constraints.',
		github: 'https://github.com/myconpeter/artcBot-frontend',
		demo: 'https://t.me/ArcticTokenBot',
		image: ArcticTelegram,
		impact: 'Over 3,000 user registered at the first month',
	},

	{
		slug: 'swift-buy-ecommerce',
		title: 'Swift Buy – Printer eCommerce Platform',
		stack: ['React', 'JavaScript', 'React Router', 'TailwindCSS', 'Redux Toolkit'],
		description:
			'I built a clean and functional eCommerce web platform for the sale of printers and printer accessories. Swift Buy features a modern UI/UX, dynamic product display, cart management, star/favorite items, and seamless checkout. It emphasizes usability and smooth state management using Redux throughout the application.',
		challenges:
			'This was my first serious dive into full mobile responsiveness while using Redux heavily for state handling. Balancing UI logic, responsiveness, and consistent data flow was quite challenging, especially when dealing with cart, wishlist, and user actions across components.',
		learnings:
			'I learned how to implement modern eCommerce interfaces with attention to detail and accessibility. I gained deeper mastery of Redux for global state management, as well as TailwindCSS utility patterns for building fully responsive and sleek UI layouts. This project also helped refine my component structure and code scalability approach.',
		github: 'https://github.com/myconpeter/preciousIT',
		demo: 'https://precious-it-silk.vercel.app',
		image: SwiftBuy,
	},
	{
		slug: 'linguaspeak-ai-translator',
		title: 'LinguaSpeak – AI Voice Translator',
		stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'OpenAI API'],
		description:
			'I developed LinguaSpeak, an AI-powered voice translation web application that lets users speak in one language and hear real-time translations in another. Built using Next.js and heavily integrated with OpenAI’s language models, the app supports smooth voice-to-text processing and generates accurate translations using an elegant and modern UI.  (Ongoing)',
		challenges:
			'Integrating OpenAI’s API for voice input and managing the request/response lifecycle with user interactions was a core challenge. Ensuring real-time responsiveness while dealing with latency from AI responses, managing audio state, and achieving fluid UX animations on mobile made it more technically demanding.',
		learnings:
			'I gained solid experience with OpenAI APIs, Next.js app routing, and optimizing user flows for real-time interactions. I also improved in responsive UI composition using TailwindCSS and added dynamic, smooth transitions with Framer Motion to elevate the user experience. This project was key in sharpening my ability to design with accessibility, speed, and performance in mind.',
		github: 'https://github.com/myconpeter/voice',
		demo: 'https://voice-pied.vercel.app',
		image: LinguaSpeak,
	},
	{
		slug: 'freecodecamp-dsa-cert',
		title: 'FreeCodeCamp DSA Certification',
		stack: ['Vanilla JavaScript'],
		description:
			'I successfully completed the JavaScript Algorithms and Data Structures certification course on FreeCodeCamp. This involved solving dozens of real-world coding challenges, building multiple small projects, and understanding the foundations of core programming and algorithmic thinking using vanilla JavaScript.',
		challenges:
			'Sticking to a consistent learning pace and solving algorithmic challenges without relying on modern libraries or frameworks was tough. Some topics like recursion, dynamic programming, and complex nested loops tested my problem-solving ability, especially under constraints like performance and readability.',
		learnings:
			'I gained deep insight into JavaScript fundamentals—from variables and scopes to recursion, functional programming, and algorithmic problem-solving. It laid a strong foundation for all of my future work in JavaScript and made me much more confident in tackling real-world problems with logic and efficiency.',
		github: 'https://github.com/myconpeter/free-code-camp-projects',
		demo: 'https://www.freecodecamp.org/certification/MYCON/javascript-algorithms-and-data-structures-v8',
		image: FreeCodeCamp,
		impact: 'Solved over 300+ algorithm challenges, earning the official certification and applying solutions to 5+ mini-projects.',
	},
	{
		slug: 'travel-pro-ticketing',
		title: 'Travel Pro – Flight & Logistics Platform',
		stack: [
			'EJS',
			'HTML',
			'CSS',
			'Bootstrap',
			'Vanilla JS',
			'Node.js',
			'Express',
			'MongoDB',
			'REST API',
			'pdf.js',
		],
		description:
			'Travel Pro is a dynamic logistics and flight ticketing platform developed using EJS templating with a responsive frontend powered by HTML, CSS, Bootstrap, and Vanilla JavaScript. The backend was architected with Node.js, Express, and MongoDB, enabling secure booking, PDF invoice generation, and admin functionality. The system is fully responsive and optimized for smooth booking workflows and intuitive user experience.',
		challenges:
			'One of the main challenges was working with EJS for dynamic server-side rendering while maintaining clean and reusable UI components. Integrating PDF generation using pdf.js and managing the complexity of booking forms, user feedback, and admin actions without modern JS libraries added to the challenge. Ensuring secure and scalable form validation and database integration also required careful planning.',
		learnings:
			'This project strengthened my full-stack skills with traditional templating engines and RESTful API design. I gained practical experience in designing secure booking systems, managing state in a stateless environment, and structuring scalable Express routes. It also improved my eye for clean UI/UX design using pure Bootstrap and Vanilla JS without modern frameworks.',
		github: 'https://github.com/myconpeter/Travel-Pro',
		demo: 'https://travel-pro-production.up.railway.app',
		image: TravelPro,
		impact: 'Fully responsive UI resulted in 50% faster load time on mobile. Integrated PDF downloads and bookings with zero downtime for live testing.',
	},
	{
		slug: 'squeezy-api-backend',
		title: 'Squeezy API – Secure & Scalable Backend',
		stack: [
			'Node.js',
			'TypeScript',
			'Express',
			'MongoDB',
			'CORS',
			'JWT',
			'Passport',
			'OAuth (Google)',
			'QRCode',
		],
		description:
			'Squeezy API is a robust, enterprise-grade backend system built with Node.js and TypeScript. Designed for scalability and high-security applications, it features modular architecture, middleware-rich design, and flexible role-based authentication. With advanced features like Google OAuth using Passport.js, secure JWT token flows, and QRCode integration, this backend lays the groundwork for scalable real-world SaaS and B2B platforms. It’s still evolving, with a focus on reliability, microservice readiness, and production-quality performance.',
		challenges:
			'One of the major hurdles was structuring the backend to remain clean, reusable, and scalable as new features were added. Integrating Google OAuth in a secure and consistent way, managing token expirations and refreshing, and implementing QRCode-based logic required deep focus. Making the app scale gracefully while preserving security principles like rate limiting and input sanitization was a challenge that pushed architectural decisions.',
		learnings:
			'I refined my understanding of TypeScript for large codebases, advanced authentication flows, and middleware layering in Express. I also gained hands-on experience building a future-ready API with flexible modularity, best practices for error handling, and a clean service-controller-model architecture. This project also boosted my experience preparing a real-world backend for deployment and scaling.',
		github: 'https://github.com/myconpeter/Auth-backend-api',
		demo: 'https://github.com/myconpeter/Auth-backend-api',
		image: Squeezy,
		impact: 'Handles token-based authentication and scalable OAuth login flows. Designed for 10,000+ concurrent requests with microservice readiness.',
	},
	{
		slug: 'arctic-web-mine',
		title: 'Arctic Web Mine',
		stack: [
			'React',
			'TypeScript',
			'TailwindCSS',
			'Redux Toolkit',
			'React Router',
			'Ethers.js',
			'WalletConnect',
			'MetaMask SDK',
			'Express',
			'MongoDB',
			'JWT',
			'Axios',
			'Mongoose',
		],
		description:
			'As Project Manager, I led the development of Arctic Web Mine — a futuristic futuristic, responsive Ethereum-based web mining platform. Users can connect their wallets via MetaMask, WalletConnect, or Coinbase Wallet to mine $ARCT tokens, complete daily tasks, and climb the ranks on a dynamic leaderboard system.',
		challenges:
			'Integrating and securely handling wallet connections (MetaMask, WalletConnect), designing a persistent leaderboard system, managing task validations in real-time, and ensuring UX responsiveness across devices.',
		learnings:
			'Gained mastery in wallet integration flows, ETH-based user auth flows, Redux state management across Web3 interactions, and leading end-to-end execution as Project Manager. Also improved skills in modular React architecture and cross-team collaboration.',
		github: 'https://github.com/myconpeter/arctic-web-frontend',
		demo: 'https://arctic-web-frontend.vercel.app',
		image: ArcticWeb,
		impact: 'Over 1,200 users onboarded via MetaMask and WalletConnect in the first month, with consistent daily task engagement across all wallet types.',
	},
	{
		slug: 'famssa-elibrary',
		title: 'FAMSSA E-Library',
		stack: [
			'React',
			'Redux Toolkit',
			'TailwindCSS',
			'React Router',
			'React PDF',
			'React Icons',
			'Express',
			'MongoDB',
			'JWT',
			'Multer',
			'Cloudinary',
			'Mongoose',
		],
		description:
			'FAMSSA E-Library is a dedicated digital platform built for the Faculty of Management Sciences, University of Uyo. It features a sleek mobile-responsive design with role-based access — allowing students to log in using their reg numbers to access curated study materials and past questions, while admins can upload new materials, assign roles, and manage content via an advanced admin panel.',
		challenges:
			'Designing an intuitive multi-role interface, securely handling file uploads to Cloudinary, implementing protected routes, and integrating the PDF reader without compromising performance on mobile devices.',
		learnings:
			'Learned robust file handling with Multer and Cloudinary, improved authentication and authorization workflows, fine-tuned PDF rendering using React-PDF, and strengthened frontend-backend integration for seamless content management.',
		github: 'https://github.com/myconpeter/FAMSSA-Elibrary',
		demo: 'https://famssa-elibrary.vercel.app',
		image: Famssa,
		impact: 'Adopted by over 500 students at the University of Uyo’s Faculty of Management Sciences. Over 1,800+ book views logged within the first semester.',
	},
	{
		slug: 'tasty-food-app',
		title: 'Tasty - Food E-Commerce',
		stack: [
			'React',
			'Redux Toolkit',
			'React Router DOM',
			'Bootstrap',
			'Reactstrap',
			'React Icons',
			'React Paginate',
			'Immer',
		],
		description:
			'Tasty is a full-featured food e-commerce web application that allows users to browse and order a variety of meals including pizza, snacks, and beverages. It features a sleek, mobile-friendly design, cart functionality, pagination, category filters, and responsive layout optimized for all screen sizes.',
		challenges:
			'Implementing smooth user experience across all devices, managing stateful cart and UI with Redux, integrating paginated results, and designing a visually engaging layout with Bootstrap and Reactstrap.',
		learnings:
			'Strengthened my skills in Redux state management, learned to design modern e-commerce flows, and practiced advanced UI composition techniques using Bootstrap, along with debugging and performance optimization for large product catalogs.',
		github: 'https://github.com/myconpeter/tasty',
		demo: 'https://tasty-xvs4.vercel.app/home',
		image: Tasty,
	},
	{
		slug: 'chatgpt-clone',
		title: 'ChatGPT Clone',
		stack: ['Next.js', 'React', 'React Spinners'],
		description:
			'This project replicates the functionality and design of OpenAI’s ChatGPT. It provides a conversational AI experience using advanced natural language processing in real-time. Users can input prompts and receive intelligent responses from an AI model, styled with a clean and responsive UI.',
		challenges:
			'Building a fluid conversational UI that mimics ChatGPT, handling async user inputs and responses efficiently, managing streaming tokens and UI reactivity, and ensuring performance across devices.',
		learnings:
			'Deepened understanding of real-time UI feedback, asynchronous data handling, and creating intuitive user interfaces for AI interaction. Also learned how to simulate realistic AI conversations in a frontend context.',
		github: 'https://github.com/myconpeter/chatGPT',
		demo: 'https://chat-gpt-lake-xi.vercel.app/',
		image: ChatGpt,
	},
	{
		slug: 'pinnacle-education',
		title: 'Pinnacle Education',
		stack: [
			'React',
			'TailwindCSS',
			'Framer Motion',
			'React Icons',
			'Smooth Scroll',
			'React Router',
			'World Flags',
		],
		description:
			'Pinnacle Education is a responsive and visually captivating ed-tech platform built to support academic excellence and accessibility across borders. With animated components, smooth section transitions, and internationalization-ready features, it reflects a modern education-focused brand identity.',
		challenges:
			'Creating a universal design language that represents educational authority while remaining visually engaging, implementing seamless smooth scroll behavior, and making the site responsive across screen sizes and regions.',
		learnings:
			'Sharpened skills in animated user interactions using Framer Motion, international-ready components, and building structured, accessible educational UI systems. Improved mastery of scroll behavior and landing-page conversion techniques.',
		github: 'https://github.com/myconpeter/pinnacle_web',
		demo: 'https://www.pinnacleeducation.online',
		image: Pinnacle,
		impact: 'Supported multilingual toggle and flag recognition. UI tested across 40+ devices, maintaining full responsiveness.',
	},
	{
		slug: 'your-natural-health',
		title: 'Your Natural Health',
		stack: ['Express', 'EJS', 'Nodemailer', 'Body Parser', 'Dotenv'],
		description:
			'Your Natural Health is a web platform designed for natural medicine practitioners to showcase holistic remedies and connect with patients globally. It features detailed remedy pages, appointment requests, and a seamless communication system via email using Nodemailer.',
		challenges:
			'Designing a clean and trustworthy UI for an alternative medicine platform, integrating secure email-based communication, and ensuring accessibility for less tech-savvy users.',
		learnings:
			'Gained deeper insights into templating with EJS, building accessible layouts for older audiences, and managing environment variables securely with Dotenv. Also improved understanding of deploying traditional server-rendered Express apps.',
		github: 'https://github.com/myconpeter/yournaturalhealth',
		demo: 'https://yournaturalhealth-production.up.railway.app/',
		image: Natural,
		impact: 'Automated contact collection and email routing using Nodemailer. Currently receiving 30+ health inquiries weekly.',
	},
];
