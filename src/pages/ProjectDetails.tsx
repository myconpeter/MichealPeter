// ProjectDetails.tsx
import { useParams } from 'react-router';
import zim from '../assets/zinenergy.jpg';
import Admin from '../assets/admin.jpg';
import fundLab from '../assets/fundLab.jpg';
import { useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import { useEffect } from 'react';

const projectData = {
	'zim-energy': {
		title: 'Zim Energy Website',
		stack: ['React', 'TypeScript', 'TailwindCSS', 'Node.js'],
		description:
			'A responsive website for Zim Energy to showcase their renewable solutions and capture leads.',
		challenges:
			'Adapting the design to different screen sizes while optimizing loading speed and SEO.',
		learnings:
			'Deepened understanding of responsive design patterns, lazy loading, and SEO-friendly React rendering.',
		github: 'https://github.com/myconpeter/zim-energy',
		demo: 'https://zim-energy.onrender.com',
		image: zim,
	},
	'zim-energy-admin': {
		title: 'Zim Admin Dashboard',
		stack: ['React', 'TypeScript', 'Chart.js', 'TailwindCSS'],
		description: 'An admin dashboard for monitoring Zim Energy users and site activity.',
		challenges:
			'Dynamic data rendering and managing complex state across charts and components.',
		learnings:
			'Improved state management using hooks and integrating third-party chart libraries.',
		github: 'https://github.com/myconpeter/zim-energy-Admin',
		demo: 'https://zim-energy-admin.onrender.com',
		image: Admin,
	},
	fundlab: {
		title: 'FundLab Platform',
		stack: ['React', 'TypeScript', 'Express.js', 'MongoDB'],
		description:
			'A donation platform allowing users to create and manage fundraising campaigns.',
		challenges: 'Ensuring secure user authentication and handling real-time updates.',
		learnings: 'Applied token-based auth with role separation and optimized API interactions.',
		github: 'https://github.com/myconpeter/fundlabuser',
		demo: 'https://fund-lab.onrender.com',
		image: fundLab,
	},
};

const ProjectDetails = () => {
	const navigate = useNavigate();

	const { slug } = useParams();
	const project = projectData[slug as keyof typeof projectData];
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!project) {
		return <div className='text-center mt-10 text-red-500'>Project not found.</div>;
	}

	return (
		<section className='min-h-screen px-4 py-16 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white'>
			<div className='max-w-5xl mx-auto space-y-12'>
				<button
					onClick={() => navigate(-1)}
					className='flex items-center text-sm text-cyan-400 hover:underline transition mb-4'>
					<FaArrowLeft className='mr-2' />
					Back to Portfolio
				</button>

				<div className='text-center'>
					<h1 className='text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600'>
						{project.title}
					</h1>
					<p className='text-gray-400 max-w-2xl mx-auto text-lg'>
						Detailed case study on how I designed, built, and deployed this project.
					</p>
				</div>

				<div className='w-full h-72 md:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-800'>
					<img
						src={project.image}
						alt={project.title}
						className=''
					/>
				</div>

				<div className='grid gap-8 md:grid-cols-2'>
					<div>
						<h2 className='text-2xl font-bold text-cyan-400 mb-2'>Project Overview</h2>
						<p className='text-gray-300 leading-relaxed'>{project.description}</p>
					</div>
					<div>
						<h2 className='text-2xl font-bold text-cyan-400 mb-2'>Tech Stack</h2>
						<ul className='flex flex-wrap gap-3 text-sm'>
							{project.stack.map((tech, index) => (
								<li
									key={index}
									className='bg-cyan-600/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-600'>
									{tech}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='grid gap-10 md:grid-cols-2'>
					<div>
						<h3 className='text-xl font-semibold text-blue-400 mb-2'>Challenges</h3>
						<p className='text-gray-400 leading-relaxed'>{project.challenges}</p>
					</div>
					<div>
						<h3 className='text-xl font-semibold text-blue-400 mb-2'>
							Lessons Learned
						</h3>
						<p className='text-gray-400 leading-relaxed'>{project.learnings}</p>
					</div>
				</div>

				<div className='flex flex-wrap gap-4 justify-center md:justify-start'>
					<a
						href={project.demo}
						target='_blank'
						rel='noopener noreferrer'
						className='bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition'>
						🚀 Live Demo
					</a>
					<a
						href={project.github}
						target='_blank'
						rel='noopener noreferrer'
						className='border border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-2 rounded-lg font-medium transition'>
						💻 Source Code
					</a>
				</div>
			</div>
		</section>
	);
};

export default ProjectDetails;
