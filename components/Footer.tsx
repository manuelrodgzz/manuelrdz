import React from 'react'

const Footer = () => {
    return (
        //Container component must have padding botom equal to footer's height
        <div className='absolute bottom-0 bg-gray-900 w-full h-24 mt-14 grid grid-cols-3 gap-6'>
            <div className='flex flex-col justify-center text-center text-gray-400'>
                <span>Icons by</span>
                <ul className='underline'>
                    <li><a href="https://icons8.com">Icons8</a></li>
                    <li><a href="https://fontawesome.com/">Fontawesome</a></li>
                </ul>                
            </div>
            <div className='flex flex-col justify-center text-center'>
                <span>Manuel Rodríguez - {new Date().getFullYear()}</span>
            </div>
        </div>
    )
}

export default Footer
