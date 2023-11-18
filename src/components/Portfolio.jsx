import React from 'react'
import Micheal from '../assets/Micheal.jpg'

const Portfolio = () => {
    const Portfolios = [
        {
            id: 1,
            src: Micheal
        },
        {
            id: 2,
            src: Micheal
        },
        {
            id: 3,
            src: Micheal
        }


    ]
    return (
        <div name='Portfolio' className='bg-white dark:bg-black text-black dark:text-white mt-12'>
            <div className='p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-3xl  my-4 font-bold hover:border-b-4 hover:border-gray-400 inline pt-12  duration-300'>Work Experience</p>
                    {/* <p className='text-xl py-4'>Checkout some my works here</p> */}

                </div>


                <div className='grid  px-auto gap-8 sm:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {Portfolios.map(({ id, src }) => (
                        <div key={id} className='shadow-lg shadow-gray-400 rounded-lg'>
                            <img className='rounded-lg hover:scale-105 duration-300' src={src} alt="Micheal" />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-black dark:text-white'>Demo</button>
                                <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-105 text-black dark:text-white'>Code</button>

                            </div>
                        </div>
                    ))}

                </div>




            </div>

        </div>
    )
}

export default Portfolio