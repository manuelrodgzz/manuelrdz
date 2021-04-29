import React from 'react'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Me = () => {
    return (
        <div className=' text-center'>
            
            <div className=' w-2/3 h-full mx-auto'>
                {/* Blue ring with opacity */}
                <div className=' mx-auto mb-2 h-48 w-48 lg:h-72 lg:w-72 rounded-full mx-auto flex bg-blue-900'>
                    {/* Blue ring without opacity */}
                    <div className='mx-auto h-40 w-40 lg:h-64 lg:w-64 rounded-full mx-auto flex bg-blue-800 m-auto'>
                        {/* Image container */}
                        <div className='relative h-32 w-32 lg:h-56 lg:w-56 m-auto'>
                            <img src='/img/me.jpeg' alt='me' className='rounded-full'/>
                        </div>
                    </div>
                </div>

                <span className='title-glow text-4xl lg:text-6xl'>MANUEL RODRÍGUEZ</span>

                <ul className='w-2/5 md:w-1/5 my-5 mx-auto flex justify-around'>
                    <li>
                        <a target='_blank' href='https://www.linkedin.com/in/manuelrodgzz/'>
                            <FontAwesomeIcon icon={faLinkedin} size='lg' className='hover:text-blue-700 cursor-pointer '/>
                        </a>
                    </li>

                    <li>
                        <a target='_blank' href='https://github.com/manuelrodgzz/'>
                            <FontAwesomeIcon icon={faGithub} size='lg' className='hover:text-purple-500 cursor-pointer '/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Me
