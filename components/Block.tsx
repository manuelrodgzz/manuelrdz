import React from 'react'
import Title from './Title'

interface Props {
    title: string,
    children: JSX.Element | JSX.Element[] | string | (JSX.Element | string)[]
}

const Block = ({title, children}: Props) => {
    return (
        <div className='my-24 mx-3'>
            <Title>{title}</Title>
            {
                typeof children === 'string'
                    ? <p>{children}</p>
                    : children
            }
        </div>
    )
}

export default Block
