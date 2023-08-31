import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faNodeJs, faHtml5, faCss3, faJsSquare, faSass } from '@fortawesome/free-brands-svg-icons'

//Ignoring icons
//@ts-ignore
import IconTs from '../assets/icons8-typescript.svg'
//@ts-ignore
import IconGraphQL from '../assets/icons8-graphql.svg'
//@ts-ignore
import IconGatsbyJs from '../assets/icons8-gatsbyjs.svg'
//@ts-ignore
import IconSQL from '../assets/icons8-microsoft-sql-server.svg'
//@ts-ignore
import IconNextJs from '../assets/nextjs.svg'
//@ts-ignore
import IconStyledComponents from '../assets/styled.svg'
import colors from '../utils/colors'

const technologies = [
    {
        component: <FontAwesomeIcon icon={faJsSquare} className={`text-5xl ${colors.JavaScript}`}/>,
        text: 'Javascript'
    },
    {
        component: <IconTs />,
        text: 'Typescript'
    },
    {
        component: <FontAwesomeIcon icon={faHtml5} className={`text-5xl ${colors.HTML}`}/>,
        text: 'HTML'
    },
    {
        component: <FontAwesomeIcon icon={faCss3} className={`text-5xl ${colors.CSS}`}/>,
        text: 'CSS'
    },
    {
        component: <FontAwesomeIcon icon={faReact} className={`text-5xl ${colors.React}`}/>,
        text: 'React'
    },
    {
        component: <IconGatsbyJs />,
        text: 'Gatsby JS'
    },
    {
        component: <IconNextJs />,
        text: 'Next JS'
    },
    {
        component: <IconGraphQL />,
        text: 'GraphQL'
    },
    {
        component: <FontAwesomeIcon icon={faNodeJs} className={`text-5xl ${colors.Node}`}/>,
        text: 'Node JS'
    },
    {
        component: <FontAwesomeIcon icon={faSass} className={`text-5xl ${colors.SASS}`}/>,
        text: 'Sass'
    },
    {
        component: <IconStyledComponents/>,
        text: 'Styled Components'
    },
    {
        component: <IconSQL />,
        text: 'SQL Server'
    }
]

const Technologies = () => {
    return (
        <div className='grid grid-cols-4 gap-6'>

            {technologies.map(tech => (
                <div key={'technology' + tech.text} className='flex mt-2'>
                    <div className='mx-auto inline-block text-center'>
                        <div className='flex justify-center'>
                            {tech.component}
                        </div>
                        <br/>
                        {tech.text}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Technologies
