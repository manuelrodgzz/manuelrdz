import React from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
    children: JSX.Element | JSX.Element[],
    pageName: string
}

const Layout = ({children, pageName}: Props) => {
    return (
        <div className='relative min-h-screen overflow-auto bg-blue-900 text-gray-300'>
            <Head>
                <title>{'<'}Manuel{'/>'} · {pageName}</title>
            </Head>
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
