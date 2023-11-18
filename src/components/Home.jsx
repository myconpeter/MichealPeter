import React from 'react'
import image from "../assets/image.jpg"

const Home = () => {
    return (
        <div name="home" className='h-full w-full bg-white text-black pt-20 lg:h-screen dark:bg-black dark:text-white '>
            <div className=' flex flex-col items-center justify-center lg:flex-row  mx-auto  h-full px-4'>
                {/* bg-gradient-to-b from-black to-gray-800 */}
                <div className=''>
                    <h2 className='text-4xl font-bold   max-w-md py-4 italic'>I'm a Software Engineer</h2>
                    <p className='  text-left py-4 max-w-md '>
                        Software Engineer with more than half a decade experience in creating and executing innovative software solutions to enhance
                        business productivity.

                    </p>

                    <p className='  text-left py-4 max-w-md'>Highly experience in all aspect of the software development lifecycle and end-to-end project management,
                        from concept through to development and deliveries. Consistency recognized as a hands-on and competent leader, skilled at coordinating
                        cross-functional team in a fast-paced, deadline-driven environment to steer timely project completion within budgetary constraints.</p>
                    <div>
                        <button className='group text-white items-center px-3 bg-blue-500 p-2 rounded-lg flex cursor-pointer'>Portfolio
                            <span className='group-hover:rotate-90 text-white mx-2   duration-300'>
                                T
                            </span>

                        </button>

                    </div>
                </div>
                <div>

                </div>

                <img className='rounded-full mx-20 w-auto h-80 pt-4' src={image} alt="micheal" />

            </div>
        </div>
    )
}

export default Home