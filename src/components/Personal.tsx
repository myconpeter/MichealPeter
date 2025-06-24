import Micheal from '../assets/Micheal.jpg';

const Personal = () => {
	const personals = [
		{
			id: 1,
			src: Micheal,
			title: 'Dojo-App',
			style: 'shadow-red-500',
			link: 'www.google.com',
			code: 'www.github.com',
		},
		{
			id: 2,
			src: Micheal,
			title: 'Job-router',
			style: 'shadow-red-500',
			link: 'www.google.com',
			code: 'www.github.com',
		},
		{
			id: 3,
			src: Micheal,
			title: 'Job-router',
			style: 'shadow-red-500',
			link: 'www.google.com',
			code: 'www.github.com',
		},
		{
			id: 4,
			src: Micheal,
			title: 'Job-router',
			style: 'shadow-red-500',
			link: 'www.google.com',
			code: 'www.github.com',
		},
		{
			id: 5,
			src: Micheal,
			title: 'Job-router',
			style: 'shadow-red-500',
			link: 'www.google.com',
			code: 'www.github.com',
		},
		{
			id: 6,
			src: Micheal,
			title: 'Job-router',
			style: 'shadow-red-500',
			link: 'www.google.com',
			code: 'www.github.com',
		},
	];
	return (
		<div
			id='Portfolio'
			className='bg-white text-black  mt-12 dark:text-white dark:bg-black'>
			<div className='p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='capitalize text-3xl font-bold  hover:border-b-4  hover:border-gray-500 inline duration-300'>
						Personal Projects
					</p>
					<p className='text-xl py-4'> </p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center py-8 px-12 sm:px-0'>
					{personals.map(({ id, src, title, style, link, code }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 shadow-gray-400 rounded-lg mt-4 mx-4 ${style}`}>
							<img
								className='w-10 mx-auto'
								src={src}
								alt='Micheal'
							/>

							<a
								className='block mt-4 text-black dark:text-white'
								href={link}>
								{title}
								{code}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Personal;
