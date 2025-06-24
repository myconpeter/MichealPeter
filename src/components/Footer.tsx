const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<div className='bg-white dark:bg-black  mt-4'>
			<div className=' p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full border-t-2 border-gray-900 text-center'>
				<p className='text-black dark:text-white'>
					This website was made with ❤ by Micheal Peter
				</p>
				<p> &copy; {date}</p>
			</div>
		</div>
	);
};

export default Footer;
