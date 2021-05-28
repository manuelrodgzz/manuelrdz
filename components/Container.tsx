import React from 'react'

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Container = ({children}: Props) => {
    return (
        <div className='container pb-24 mx-auto text-justify min-h-screen md:min-h-full'>
            {children}
        </div>
    )
}

export default Container
