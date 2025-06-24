const Contact = () => {
	return (
		<div
			id='Contact'
			className='bg-white text-black dark:text-white dark:bg-black mt-12'>
			<div className=' p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8 '>
					<p className=' text-3xl font-bold hover:border-b-4 hover:border-gray-400 inline pt-12 duration-300'>
						Contact
					</p>
					<p className='text-xl py-4'>Submit the form below to get in touch with me</p>
				</div>

				<div className='flex  justify-center items-center '>
					<form
						action='https://getform.io/f/f9a90bc0-f6bf-43dd-a401-907265398e15'
						method='POST'
						className='flex flex-col w-full md:w-1/2'>
						<input
							type='text'
							placeholder='Enter Your Name'
							name='name'
							className='p-2 bg-transparent border-2 border-black dark:border-white  rounded-md text-white focus:outline-none'
						/>
						<input
							type='text'
							placeholder='Enter Your Email'
							name='email'
							className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none border-black dark:border-white '
						/>
						<textarea
							name='message'
							placeholder='Enter Your Message'
							id=''
							cols={30}
							rows={10}
							className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none border-black dark:border-white '></textarea>

						<button className='text-white bg-gray-800 p-2  rounded-lg mx-auto flex items-center hover:scale-105 duration-300'>
							Let's Talk
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
