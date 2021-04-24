import React from 'react'

interface Props {
    children: string
}

const Title = ({children}: Props) => {
    return (
        <p className='title text-5xl mb-5'>
            {children}
        </p>
    )
}

export default Title
