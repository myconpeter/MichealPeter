// Updated Portfolio.tsx
import { Link } from 'react-router';
import Admin from '../assets/admin.jpg';
import fundLab from '../assets/fundLab.jpg';
import zim from '../assets/zinenergy.jpg';

interface Project {
	id: number;
	title: string;
	shortDesc: string;
	image: string;
	slug: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Zim Energy Website',
		shortDesc: 'A responsive website for a renewable energy company.',
		image: zim,
		slug: 'zim-energy',
	},
	{
		id: 2,
		title: 'Zim Admin Dashboard',
		shortDesc: 'Admin panel for managing content and users.',
		image: Admin,
		slug: 'zim-energy-admin',
	},
	{
		id: 3,
		title: 'FundLab Platform',
		shortDesc: 'A donation management platform with user roles.',
		image: fundLab,
		slug: 'fundlab',
	},
];

const Portfolio = () => {
	return (
		<div
			id='Portfolio'
			className='bg-white dark:bg-black text-black dark:text-white mt-12'>
			<div className='p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-3xl my-4 font-bold hover:border-b-4 hover:border-gray-400 inline pt-12 duration-300'>
						My Projects
					</p>
				</div>

				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3'>
					{projects.map(({ id, title, shortDesc, image, slug }) => (
						<div
							key={id}
							className='shadow-lg shadow-gray-400 rounded-lg'>
							<img
								className='rounded-t-lg object-cover w-full h-40 p-2 hover:skew-x-2'
								src={image}
								alt={title}
							/>
							<div className='p-4'>
								<h3 className='text-xl font-semibold mb-2'>{title}</h3>
								<p className='text-sm text-gray-600 dark:text-gray-300 mb-4'>
									{shortDesc}
								</p>
								<Link
									to={`/projects/${slug}`}
									className='inline-block text-blue-600 hover:underline dark:text-blue-400'>
									See More →
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
