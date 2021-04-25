import React, { useContext } from 'react'
import Link from 'next/link'
import { ContentContext } from '../context/SiteContent'

const Navbar = () => {

    const {currentLanguage, setCurrentLanguage} = useContext(ContentContext)

    return (
        <div className='w-full h-24 bg-blue-900 flex justify-end items-center rounded-b-full shadow-lg'>
            <ul className='flex space-x-10 text-xl mx-auto'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/projects'>Projects</Link></li>
            </ul>
            <div className='absolute mr-24'>
                <select className='rounded-lg shadow-lg bg-blue-700' onChange={(e) => setCurrentLanguage(e.target.value as 'spanish' | 'english')}>
                    <option value='english'>English</option>
                    <option value='spanish'>Español</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar
