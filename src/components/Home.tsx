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
						I'm a Software Engineer
					</h2>
					<p className='  text-left py-4 max-w-md '>
						Software Engineer with more than half a decade experience in creating and
						executing innovative software solutions to enhance business productivity.
					</p>

					<p className='  text-left py-4 max-w-md'>
						Highly experience in all aspect of the software development lifecycle and
						end-to-end project management, from concept through to development and
						deliveries. Consistency recognized as a hands-on and competent leader,
						skilled at coordinating cross-functional team in a fast-paced,
						deadline-driven environment to steer timely project completion within
						budgetary constraints.
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
								href='/MichealpeterResume.pdf'
								download={true}
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
