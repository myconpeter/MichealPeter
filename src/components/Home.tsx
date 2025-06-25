import image from '../assets/image.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div
			id='Home'
			className='h-full w-full bg-white text-black pt-20 lg:h-screen dark:bg-black dark:text-white '>
			<div className=' flex flex-col items-center justify-center lg:flex-row  mx-auto  h-full px-4'>
				{/* bg-gradient-to-b from-black to-gray-800 */}
				<div className=''>
					<h2 className='text-4xl font-bold   max-w-md py-4 italic'>
						Software Engineer & Technical Project Lead
					</h2>
					<p className='  text-left py-4 max-w-md '>
						Full-Stack Software Engineer & Project Lead, experienced in building and
						managing modern web applications and automation systems. I specialize in
						TypeScript, JavaScript, Node.js, React, NextJs and MongoDB, postgresql with
						a proven ability to ship high-quality software from concept to deployment.
					</p>

					<p className='  text-left py-4 max-w-md'>
						I led the development of the Arctic Telegram Bot and Web App — overseeing
						frontend, backend, and API integrations — while ensuring security,
						performance, and real-world usability. This hands-on leadership role
						sharpened my ability to manage features, timelines, and technical direction
						across the full stack.
					</p>
					<p className='  text-left py-4 max-w-md'>
						Whether I’m designing clean user interfaces or building secure, scalable
						backend systems, I bring strong technical skills and a builder’s mindset to
						every project — from the first line of code to final delivery.
					</p>
					<div className='flex flex-row'>
						<Link
							to='Portfolio'
							smooth
							duration={500}
							className='group text-white items-center p-2  px-2  bg-blue-500  rounded-lg flex cursor-pointer w-fit'>
							Portfolio
							<span className='group-hover:rotate-90 text-white mx-2   duration-300'>
								<MdOutlineKeyboardArrowRight />
							</span>
						</Link>

						<div className='group text-white items-center px-3 bg-blue-500 rounded-lg flex cursor-pointer w-fit ml-4'>
							<a
								className='group text-white items-center px-3 bg-blue-500  rounded-lg flex cursor-pointer w-fit'
								// href='/MichealpeterResume.pdf'
								// download={true}
								target='_blank'
								rel='noreferrer'>
								Resume
								<span className='text-white mx-2'>
									<BsFillPersonLinesFill />
								</span>
							</a>
						</div>
					</div>
				</div>
				<div></div>

				<img
					className='rounded-full mx-20 w-auto h-80 pt-4'
					src={image}
					alt='micheal'
				/>
			</div>
		</div>
	);
};

export default Home;
