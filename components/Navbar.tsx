import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='w-full h-24 bg-blue-900 flex justify-end items-center rounded-b-full shadow-lg'>
            <ul className='flex space-x-10 text-xl mx-auto'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/projects'>Projects</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
