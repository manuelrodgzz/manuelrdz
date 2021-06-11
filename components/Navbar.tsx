import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import PagesList from './PagesList';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false)

    const nav = () => (
        <div className='relative w-full md:h-24 md:bg-blue-900 md:rounded-b-full justify-center items-center md:shadow-lg'>
            <div className='hidden md:flex h-full justify-center items-center'>
                <PagesList ulClassName='flex space-x-10 text-xl' liClassName='hover:text-white transition' activeClassName='text-white'/>
                <LanguageSelector />
            </div>

            {/* Mobile Menu Button */}
            <div className='md:hidden fixed flex right-5 top-10 bg-blue-900 rounded-full shadow-lg h-10 w-10 justify-center items-center z-20' onClick={() => setShowSidebar(!showSidebar)}>
                <FontAwesomeIcon icon={faBars}/>
            </div>

            {/* Mobile dark background */}
            <div className={`justify-end md:hidden fixed sidebar-background ${showSidebar ? 'flex bg-black opacity-25' : 'hidden'} shadow-lg h-full w-screen h-screen z-10`} onClick={() => setShowSidebar(false)}>
            </div>

            {/* Sidebar */}
            <div className={`inline-block md:hidden fixed bg-blue-900 shadow-lg h-full w-3/4 pt-20 h-screen left-full ml-1/4 sidebar ${showSidebar && 'show'} z-10`}>
                <PagesList liClassName='text-center mt-2'/>
                <LanguageSelector />
            </div>
        </div>
    )
 
    return nav()
}

export default Navbar
