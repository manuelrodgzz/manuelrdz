import React from 'react'
import Title from './Title'

interface Props {
    title: string,
    children: any
}

const Block = ({title, children}: Props) => {
    return (
        <div className='my-24 mx-3'>
            <Title>{title}</Title>
            {
                typeof children === 'string'
                    ? children.split('\n').map((sentence, index) => (<p key={title + index}>{sentence}</p>))
                    : children
            }
        </div>
    )
}

export default Block
