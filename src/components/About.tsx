const About = () => {
	return (
		<div
			id='About'
			className='bg-white text-black dark:text-white mt-12 dark:bg-black'>
			<div className='max-w-screen-lg flex flex-col mx-auto justify-center w-full h-full p-4'>
				<div className='pb-12 '>
					<p className='capitalize text-3xl font-bold  hover:border-b-4  hover:border-gray-500 inline duration-300'>
						about me
					</p>
				</div>

				<p className='text-md'>
					Welcome to my corner of the web. My journey in tech began back in secondary
					school, driven by a deep curiosity and a laptop that opened up a new world. What
					started as fascination — even dabbling in how systems work under the hood — soon
					transformed into a focused passion for software development.
				</p>

				<p className='text-md mt-4'>
					Today, I'm a full-stack software engineer who enjoys crafting real-world
					solutions through code. Recently got my Degree in Computer Science at the
					University of Uyo, I’ve built projects that integrate both frontend and backend
					technologies — from web apps using React and Next.js to backend services using
					Node.Js, Express to Database Implementation using MongoDB, Postgresql and
					Telegram bots powered by Node.js, Express.
				</p>

				<br />

				<p className='text-md mt-4'>
					I love solving problems, automating tasks, and creating software that’s both
					useful and scalable. I’m also someone who values learning, curiosity, and
					progress. I believe software engineering is more than just code — it's about
					improving lives, accelerating ideas, and making systems more efficient and
					impactful.
				</p>
				<p className='text-md mt-4'>
					Thanks for stopping by. Let’s build something meaningful together.
				</p>
			</div>
		</div>
	);
};

export default About;
