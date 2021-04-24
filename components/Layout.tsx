import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Layout = ({children}: Props) => {
    return (
        <div className='relative min-h-screen overflow-auto bg-blue-900 text-gray-300'>
            <div className='bg-blue-900 border-red-900 mb-6'>
                <Navbar />
            </div>
            <div className='bg-gradient-to-b from-blue-900 via-gray-800 to-gray-800'>
            {children}
            <Footer />
            </div>
        </div>
    )
}

export default Layout
