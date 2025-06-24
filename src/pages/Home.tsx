import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
// import Personal from "./components/Personal";
import Portfolio from '../components/Portfolio';
import SocialLinks from '../components/SocialLinks';
import SocialSmall from '../components/SocialSmall';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import type { ReactNode } from 'react';

interface Link {
	id: number;
	child: ReactNode;
	href: string;
	download?: boolean; // optional, since not all links use it
}

function HomePage() {
	const links: Link[] = [
		{
			id: 1,
			child: (
				<>
					LinkedIn
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
					Mail
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
					Github
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
					X
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
					Resume
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
		<div className='dark:bg-black'>
			<Navbar />
			<Home />
			<SocialLinks links={links} />

			<About />
			<Portfolio />
			<Experience />
			{/* <Personal /> */}

			<Contact />
			<SocialSmall />

			<Footer />
		</div>
	);
}

export default HomePage;
