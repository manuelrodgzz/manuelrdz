import React from 'react'

const Footer = () => {
    return (
        <div className='absolute bottom-0 bg-gray-900 w-full h-16 mt-14 flex justify-center items-center'>
            <span>Manuel Rodríguez - {new Date().getFullYear()}</span>
        </div>
    )
}

export default Footer
