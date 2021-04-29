import React, { useContext } from 'react'
import Link from 'next/link'
import {ContentContext} from '../context/SiteContent'

interface Props {
    ulClassName?: string
    liClassName?: string
}

const PagesList = ({ulClassName, liClassName}: Props) => {

    const {content: {nav}} = useContext(ContentContext)

    return (
        <ul className={ulClassName}>
            {
                Object.values(nav).map((page) => (
                    <li key={page.path} className={liClassName}><Link href={page.path}>{page.text}</Link></li>
                ))
            }
        </ul>
    )
}

export default PagesList
