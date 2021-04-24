import React from 'react'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Container = ({children}: Props) => {
    return (
        <div className='container pb-24 mx-auto text-justify'>
            {children}
        </div>
    )
}

export default Container
