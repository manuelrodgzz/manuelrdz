import React, { createContext, useEffect, useState } from 'react'
import { Translation } from '../interfaces/index';
import { SiteContentMap, SiteContent } from '../types/index';
import siteContent from '../siteContent'

interface SiteContextState {
    setCurrentLanguage: (language: 'spanish'|'english') => void,
    currentLanguage: keyof Translation,
    content: SiteContent
}

const getContent = (siteContent: SiteContentMap, currentLanguage: keyof Translation) => ({
    nav: Object.fromEntries(
        Object.keys(siteContent.nav).map(
            pageName => [pageName, {...siteContent.nav[pageName], text: siteContent.nav[pageName].text[currentLanguage]}]
        )
    ),
    index: {
        aboutTitle: siteContent.index.aboutTitle[currentLanguage],
        aboutContent: siteContent.index.aboutContent[currentLanguage],
        technologiesTitle: siteContent.index.technologiesTitle[currentLanguage],
        pinnedReposTitle: siteContent.index.pinnedReposTitle[currentLanguage],
        repoCardButtonText: siteContent.index.repoCardButtonText[currentLanguage]
    },
    projects: {
        demosTitle: siteContent.projects.demosTitle[currentLanguage],
        demosContent: siteContent.projects.demosContent[currentLanguage],
        demos: siteContent.projects.demos.map(demo => ({
            ...demo,
            title: demo.title[currentLanguage],
            description: demo.description[currentLanguage],
            demoButtonText: demo.demoButtonText[currentLanguage]
        }))
    },
    resume: {
        title: siteContent.resume.title[currentLanguage],
        downloadButton: siteContent.resume.downloadButton[currentLanguage],
        resumeButton: siteContent.resume.resumeButton[currentLanguage]
    }
})

export const ContentContext = createContext<SiteContextState>({} as SiteContextState)

const SiteContentProvider = ({children}: any) => {

    const [currentLanguage, setCurrentLanguage] = useState<keyof Translation>('english')
    const [content, setContent] = useState<SiteContent>(getContent(siteContent, currentLanguage))
    
    useEffect(() => {
        setContent(getContent(siteContent, currentLanguage))
    }, [currentLanguage])

    return (
        <ContentContext.Provider value={{
            setCurrentLanguage,
            currentLanguage,
            content: content
        }}>
            {children}
        </ContentContext.Provider>
    )
}



export default SiteContentProvider
