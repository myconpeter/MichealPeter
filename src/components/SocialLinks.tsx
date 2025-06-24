import type { ReactNode } from 'react';

interface Link {
	id: number;
	child: ReactNode;
	href: string;
	download?: boolean;
}

interface SocialLinksProps {
	links: Link[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
	return (
		<div className=' lg:top-[35%] lg:left-0 lg:fixed hidden lg:flex'>
			<ul>
				{links.map(({ id, child, href, download }) => (
					<li
						key={id}
						className='pl-4 bg-gray-800 rounded-r-lg w-40 flex justify-between items-center h-12 ml-[-110px] hover:ml-[0] duration-200 dark:bg-gray-600'>
						<a
							href={href}
							className='text-white w-full flex justify-between items-center  '
							download={download}
							target='_blank'
							rel='noreferrer'>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
