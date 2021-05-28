import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {ContentContext} from '../context/SiteContent'

interface Props {
    ulClassName?: string
    liClassName?: string,
    activeClassName?: string
}

const PagesList = ({ulClassName, liClassName, activeClassName}: Props) => {

    const {content: {nav}} = useContext(ContentContext)
    const router = useRouter()

    const isActive = (path: string) => router.pathname === path

    return (
        <ul className={ulClassName}>
            {
                Object.values(nav).map((page) => (
                    <li key={page.path} className={`${liClassName} ${isActive(page.path) && activeClassName}`}><Link href={page.path}>{page.text}</Link></li>
                ))
            }
        </ul>
    )
}

export default PagesList
