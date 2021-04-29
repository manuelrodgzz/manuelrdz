import React, { createContext, useEffect, useRef, useState } from 'react'
import { SiteContent, Translation } from '../interfaces'
import siteContent from '../siteContent'

interface SiteContextState {
    setCurrentLanguage: (language: 'spanish'|'english') => void,
    currentLanguage: keyof Translation,
    content: SiteContent
}

export const ContentContext = createContext<SiteContextState>({} as SiteContextState)

const SiteContentProvider = ({children}: any) => {

    const [currentLanguage, setCurrentLanguage] = useState<keyof Translation>('english')
    const [content, setContent] = useState<SiteContent>({
        nav: {
            home: {
                text: siteContent.nav.home.text[currentLanguage],
                path: siteContent.nav.home.path
            },
            projects: {
                text: siteContent.nav.projects.text[currentLanguage],
                path: siteContent.nav.projects.path
            }
            
        },
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
        }
    })

    useEffect(() => {
        setContent({
            nav: {
                home: {
                    ...siteContent.nav.home,
                    text: siteContent.nav.home.text[currentLanguage]
                },
                projects: {
                    ...siteContent.nav.projects,
                    text: siteContent.nav.projects.text[currentLanguage]
                }
                
            },
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
                    demoButtonText: demo.demoButtonText[currentLanguage],
                }))
            }
        })
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
