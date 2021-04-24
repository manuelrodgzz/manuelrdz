import React from 'react'
import Image from 'next/image'

interface Props {
    imageSrc: string,
    children: string | (string | JSX.Element)[]
    title: string
    imageAlt?: string
    reverse?: boolean
}

const Demo = ({imageSrc, imageAlt, children, reverse, title}: Props) => {
    return (
        <div className=' shadow-2xl rounded-lg p-5'>
            <div className='my-5 text-2xl text-center demo-title'>
                <span>{title}</span>
            </div>
            <div className={`flex ${reverse && 'flex-row-reverse'} items-end justify-between mb-14`}>
                <div className='relative lg:w-2/5 lg:h-80'>
                    <Image src={imageSrc} alt={imageAlt} layout='fill' className='rounded-lg'/>
                </div>

                <div className={`w-3/5 p${reverse ? 'r' : 'l'}-16 my-auto`}>
                    <p>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Demo
