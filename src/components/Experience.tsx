const Experience = () => {
	const Portfolios = [
		{
			id: 1,
			title: 'JavaScript',
			style: ' border-green-300',
		},
		{
			id: 2,
			title: 'TypeScript',
			style: 'border-red-500',
		},
		{
			id: 2,
			title: 'Agile & Scrum',
			style: 'border-red-500',
		},
		{
			id: 3,
			title: 'Node JS',
			style: 'border-blue-500',
		},
		{
			id: 4,
			title: 'React JS',
			style: 'border-pink-500',
		},
		{
			id: 5,
			title: 'Next JS',
			style: 'border-orange-500',
		},

		{
			id: 6,
			title: 'Mongo DB',
			style: 'border-black',
		},
		{
			id: 7,
			title: 'PostgreSQL',
			style: 'border-gray-500',
		},
		{
			id: 8,
			title: 'SQL',
			style: 'border-red-200',
		},

		{
			id: 9,
			title: 'Powershell',
			style: 'border-blue-300',
		},
		{
			id: 10,
			title: 'Express JS',
			style: 'border-blue-900',
		},
		{
			id: 11,
			title: 'OAUTH',
			style: 'border-yellow-900',
		},
		{
			id: 12,
			title: 'JWT Auth',
			style: 'border-green-900',
		},
		{
			id: 13,
			title: 'Google Auth',
			style: 'border-orange-900',
		},
		{
			id: 14,
			title: 'JSON',
			style: 'border-blue-900',
		},
		{
			id: 15,
			title: 'API',
			style: 'border-black',
		},
		{
			id: 16,
			title: 'Open AI',
			style: 'border-red-900',
		},
		{
			id: 17,
			title: 'DSA',
			style: 'border-pink-900',
		},
		{
			id: 18,
			title: 'LINUX',
			style: 'border-red-300',
		},

		{
			id: 20,
			title: 'AWS',
			style: 'border-yelloe-300',
		},
		{
			id: 21,
			title: 'Git',
			style: 'border-gray-900',
		},
		{
			id: 22,
			title: 'Github',
			style: 'border-red-600',
		},

		{
			id: 24,
			title: 'TypeScript',
			style: 'border-brown-500',
		},

		{
			id: 27,
			title: 'HTML',
			style: 'border-red-700',
		},
		{
			id: 28,
			title: 'CSS',
			style: 'border-blue-100',
		},
		{
			id: 29,
			title: 'Bootstrap',
			style: 'border-gray-700',
		},
		{
			id: 30,
			title: 'Tailwind Css',
			style: 'border-green-800',
		},
		{
			id: 31,
			title: 'Mongo DB',
			style: 'border-yellow-700',
		},
		{
			id: 33,
			title: 'Semantic UI',
			style: 'border-orange-700',
		},
		{
			id: 34,
			title: 'OOP',
			style: 'border-orange-700',
		},
	];
	return (
		<div
			id='Skills'
			className='bg-white text-black  mt-12 dark:text-white dark:bg-black'>
			<div className='p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='capitalize text-3xl font-bold  hover:border-b-4  hover:border-gray-500 inline duration-300'>
						Technical Skills{' '}
					</p>
					<p className='text-xl pt-4'>
						Here are some of the Technologies i've had hands-on exprience with:{' '}
					</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-center py-2 px-12 sm:px-0'>
					{Portfolios.map(({ id, title, style }) => (
						<div
							key={id}
							className={`${style}  mx-4  border-2 my-4  p-2 rounded-lg hover:scale-105`}>
							{title}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
