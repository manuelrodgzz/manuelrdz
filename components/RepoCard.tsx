import React from 'react'
import { StarredRepo } from '../interfaces'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faJsSquare, faCss3, faHtml5, faReact, faNodeJs, faSass} from '@fortawesome/free-brands-svg-icons'
//@ts-ignore
import IconTs from '../assets/icons8-typescript.svg'
import { RepoLanguages } from '../types/index';
import colors from '../utils/colors'
import Button from './Button';

interface Props {
    repo: StarredRepo,
    languages: RepoLanguages
}

const icons = {
    JavaScript: {icon: faJsSquare, color: colors.JavaScript},
    HTML: {icon: faHtml5, color: colors.HTML},
    CSS: {icon: faCss3, color: colors.CSS},
    React: {icon: faReact, color: colors.React},
    SCSS: {icon: faSass, color: colors.SCSS},
    SASS: {icon: faSass, color: colors.SASS},
    TypeScript: {component: IconTs},
    Node: {icon: faNodeJs, color: colors.Node}
}

const RepoCard = ({repo, languages}: Props) => {

    /* Github can not detect frameworks as node and react, this ones have to
        be detected manually by reading repo description
    */
    const renderFrameworkIcon = () => {
        const descriptionArray = repo?.description?.toLowerCase().replace(/\.|\,/g, '').split(' ')
        
        if(descriptionArray?.includes('node'))
            return <FontAwesomeIcon icon={icons.Node.icon} className={`${icons.Node.color} text-3xl mr-3`}/>

        if(descriptionArray?.includes('react'))
            return <FontAwesomeIcon icon={icons.React.icon} className={`${icons.React.color} text-3xl mr-3`}/>

    }

    return (
        
        <div className='bg-gray-50 select-none text-black p-5 w-3/4 lg:w-2/4 mx-auto rounded-lg'>
            <div className='flex justify-between mb-8'>
                {repo.name}
                <FontAwesomeIcon icon={faGithub} className='text-2xl text-black'/>
            </div>
            <div className='text-gray-500 my-12'>
                {repo.description}
                <br/>

                {/* <div className='mt-10 text-white'>
                    
                </div> */}
            </div>
            <div className='flex flex-col-reverse sm:flex-row'>
                <div className='flex justify-center mt-3 sm:w-1/4 sm:m-0'>
                    <Button text='Visit repo' href={repo.html_url}/>
                </div>
                <div className='flex items-center justify-center sm:justify-end sm:w-3/4'>
                    {
                        Object.keys(languages).map((language: string) => {
                            
                            const commonProps = {
                                //@ts-ignore
                                className: `${icons[language].color} text-3xl mr-3`,
                                key: 'repocard-icon' + repo.id + language
                            }

                            //@ts-ignore
                            if(icons[language].icon) {
                                //@ts-ignore
                                return <FontAwesomeIcon {...commonProps} icon={icons[language].icon} className={`${icons[language].color} text-3xl mr-3`}/>
                            }
                            else {
                                //@ts-ignore
                                const Component = icons[language].component
                                return <Component {...commonProps} key={'repocard-icon' + repo.id + language}/>
                            }
                        })
                    }

                    {
                        renderFrameworkIcon()
                    }
                </div>
            </div>
        </div>
    )
}

export default RepoCard
