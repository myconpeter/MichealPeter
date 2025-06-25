import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';

const SocialSmall = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					<span className='mr-3'>
						<FaLinkedin />
					</span>
				</>
			),
			href: 'https://www.linkedin.com/in/micheal-peter-bb534a370',
		},
		{
			id: 2,
			child: (
				<>
					<span className='mr-3'>
						<HiOutlineMail />
					</span>
				</>
			),
			href: 'mailto:michealpeter040@gmail.com',
		},
		{
			id: 3,
			child: (
				<>
					<span className='mr-3'>
						<FaGithub />
					</span>
				</>
			),
			href: 'https://github.com/myconpeter',
		},

		{
			id: 5,
			child: (
				<>
					<span className='mr-3'>
						<FaXTwitter />
					</span>
				</>
			),
			href: 'https://twitter.com/GreatmyconPeter',
			download: true,
		},
		{
			id: 6,
			child: (
				<>
					<span className='mr-3'>
						<BsFillPersonLinesFill />
					</span>
				</>
			),
			href: '/MichealpeterResume.pdf',
			download: true,
		},
	];
	return (
		<div className='lg:hidden dark:text-white w-full h-full p-4 max-w-screen-lg mx-auto flex flex-row  justify-center items-center'>
			{links.map((link) => (
				<div
					className='ml-3'
					key={link.id}>
					<a
						className='mx-2 hover:scale-105'
						href={link.href}
						download={link.download}
						target='_blank'
						rel='noreferrer'>
						{link.child}
					</a>
				</div>
			))}
		</div>
	);
};

export default SocialSmall;
