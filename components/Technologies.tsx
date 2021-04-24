import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faNodeJs, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons'

//Ignoring icons
//@ts-ignore
import IconTs from '../assets/icons8-typescript.svg'
//@ts-ignore
import IconGraphQL from '../assets/icons8-graphql.svg'
//@ts-ignore
import IconCSharp from '../assets/icons8-c-sharp-logo.svg'
//@ts-ignore
import IconSQL from '../assets/icons8-microsoft-sql-server.svg'
import colors from '../utils/colors'

const technologies = [
    {
        component: <FontAwesomeIcon icon={faJsSquare} className={`text-5xl ${colors.JavaScript}`}/>,
        text: 'Javascript'
    },
    {
        component: <FontAwesomeIcon icon={faReact} className={`text-5xl ${colors.React}`}/>,
        text: 'React'
    },
    {
        component: <FontAwesomeIcon icon={faHtml5} className={`text-5xl ${colors.HTML}`}/>,
        text: 'HTML'
    },
    {
        component: <FontAwesomeIcon icon={faCss3} className={`text-5xl ${colors.CSS}`}/>,
        text: 'Css'
    },
    {
        component: <IconTs />,
        text: 'Typescript'
    },
    {
        component: <IconGraphQL />,
        text: 'GraphQL'
    },
    {
        component: <IconSQL />,
        text: 'SQL Server'
    },
    {
        component: <IconCSharp/>,
        text: 'C#'
    },
    {
        component: <FontAwesomeIcon icon={faNodeJs} className={`text-5xl ${colors.Node}`}/>,
        text: 'Node JS'
    },
]

const Technologies = () => {
    return (
        <div className='grid grid-cols-4 gap-6'>

            {technologies.map(tech => (
                <div key={'technology' + tech.text} className='px-auto flex'>
                    <div className='mx-auto inline-block text-center'>
                        {tech.component}
                        <br/>
                        {tech.text}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Technologies
