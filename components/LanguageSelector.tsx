import React, { useContext } from 'react'
import { ContentContext } from '../context/SiteContent'

const LanguageSelector = () => {

    const {currentLanguage, setCurrentLanguage} = useContext(ContentContext)

    return (
        <div className='mx-auto mt-5 w-min md:absolute md:right-10 md:my-auto md:mr-10'>
            <select className='rounded-lg shadow-lg bg-blue-700 cursor-pointer' onChange={(e) => setCurrentLanguage(e.target.value as 'spanish' | 'english')} defaultValue={currentLanguage}>
                <option value='english'>English</option>
                <option value='spanish'>Español</option>
            </select>
        </div>
    )
}

export default LanguageSelector
