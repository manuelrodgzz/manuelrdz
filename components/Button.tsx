import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

interface Props {
    text: string,
    href: string,
    icon?: IconDefinition,
    className?: string
}

const Button = ({text, href, className, icon}: Props) => {
    return (
        <a target='_blank' href={href}>
            <div className={`bg-blue-700 text-white rounded-lg p-2 hover:bg-blue-500 transition-colors whitespace-nowrap inline-block ${className}`}>
                {icon && <FontAwesomeIcon icon={icon} className='mr-2'/>}
                {text}
            </div>
        </a>
    )
}

export default Button
