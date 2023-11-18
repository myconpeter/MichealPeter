import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")

        }
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },

        {
            id: 3,
            link: "Experience"
        },
        {
            id: 4,
            link: "Skills"
        },

        {
            id: 5,
            link: "Projects"
        },
        {
            id: 6,
            link: "Contact"
        },

    ]

    return (
        <div className='flex items-center justify-between px-4 fixed bg-white    w-full h-20 dark:bg-black'>
            <h1 className='text-black font-bold text-2xl  ml-3 z-10  sm:text-4xl md:text-5xl lg:text-5xl  dark:text-white '>
                Micheal Peter
            </h1>

            <button onClick={handleTheme} className='bg-white hidden lg:block'>{theme === 'dark' ? 'Light' : 'Dark'}</button>
            <button onClick={handleTheme} className='bg-white lg:hidden'>{theme === 'dark' ? 'Light' : 'Dark'}</button>

            <ul className='hidden lg:flex'>

                {links.map(({ id, link }) => (
                    <li key={id} className='dark:text-gray-400  px-4 hover:scale-105 hover:border-b-2  capitalize font-medium duration-200 text-gray-800'>{link}</li>

                ))}
            </ul>

            <div className='lg:hidden'>
                <button onClick={() => setNav(!nav)} className='text-black bg-white z-10 relative mr-4 cursor-pointer dark:text-white dark:bg-black'>{nav ? "p" : "c"}</button>
            </div>
            {nav && (
                <div className='flex  absolute top-0 left-0 text-white h-screen w-full  '>

                    <div onClick={() => setNav(!nav)} className='w-1/3 bg-transparent  h-screen '></div>
                    <ul className=' lg:hidden flex  flex-col  w-2/3 bg-white text-black dark:bg-black dark:text-white text-bla  h-screen  justify-center items-center  '>
                        {links.map(({ id, link }) => (
                            <li key={id} className='text-2xl capitalize text-black dark:text-white cursor-pointer py-4 px-4'>
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar