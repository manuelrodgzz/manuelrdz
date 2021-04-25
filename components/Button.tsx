import React from 'react'

interface Props {
    text: string,
    href: string,
    className?: string
}

const Button = ({text, href, className}: Props) => {
    return (
        <a target='_blank' href={href}>
            <div className={`bg-blue-700 text-white rounded-lg p-2 hover:bg-blue-500 transition-colors whitespace-nowrap inline-block ${className}`}>
                {text}
            </div>
        </a>
    )
}

export default Button
