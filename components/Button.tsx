import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

interface Props {
    text: string,
    href: string,
    className?: string,
    download?: string,
    icon?: IconDefinition,
    onClick?: ( e: React.MouseEvent<HTMLAnchorElement> ) => void
}

const Button = ({text, href, className, icon, download, onClick}: Props) => {
    return (
        <a target='_blank' download={download} href={href} onClick={ onClick }>
            <div className={`bg-blue-700 text-white rounded-lg p-2 hover:bg-blue-500 transition-colors whitespace-nowrap inline-block ${className}`}>
                {icon && <FontAwesomeIcon icon={icon} className='mr-2'/>}
                {text}
            </div>
        </a>
    )
}

export default Button
