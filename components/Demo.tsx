import React from 'react'
import Image from 'next/image'
import Button from './Button'

interface Props {
    imageSrc: string,
    children: string | (string | JSX.Element)[]
    title: string
    demoUrl: string
    imageAlt?: string
    reverse?: boolean
}

const Demo = ({imageSrc, imageAlt, children, reverse, title, demoUrl}: Props) => {
    return (
        <div className=' shadow-2xl rounded-lg p-5'>
            <div className='my-5 text-2xl text-center demo-title'>
                <span>{title}</span>
            </div>
            <div className={`md:flex ${reverse && 'flex-row-reverse'} items-end justify-between mb-14`}>
                <div className='flex justify-center mb-5 lg:w-2/5 lg:h-80 md:w-3/5 md:h-80'>
                    <Image src={imageSrc} alt={imageAlt} width={420} height={250}  className='rounded-lg'/>
                </div>
                
                <div className={`lg:w-3/5 md:w-2/5 md:p${reverse ? 'r' : 'l'}-16 my-auto`}>
                        {children}
                </div>
            </div>
            <div className={`flex justify-center md:${!reverse ? 'justify-end' : 'justify-start'}`}>
                <Button text='Live demo' href={demoUrl} className='m-5'/>
            </div>
        </div>
    )
}

export default Demo
