import React from 'react'

const SocialSmall = () => {
    const links = [
        {
            id: 1,
            href: 'http://www.lol.com',

            title: 'M'
        },
        {
            id: 2,
            href: 'http://www.lol.com',
            title: 'X'
        },
        {
            id: 2,
            href: '/MichealpeterResume.pdf',
            title: 'R',
            download: true
        },
    ]
    return (
        <div className='lg:hidden dark:text-white w-full h-full p-4 max-w-screen-lg mx-auto flex flex-row  justify-center items-center w-full h-full'>
            {links.map(link => (
                <div key={link.id}>
                    <a
                        className='mx-2 hover:scale-105' href={link.href}
                        download={link.download}

                        target='_blank'
                        rel="noreferrer"
                    >
                        {link.title}</a>

                </div>

            ))}
        </div>
    )
}

export default SocialSmall