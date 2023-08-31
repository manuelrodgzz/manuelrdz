import { SiteContentMap } from '../types';

const siteContent: SiteContentMap = {
    nav: {
        home: {
            text: { 
                spanish: 'Inicio',
                english: 'Home'
            },
            path: '/'
        },
        projects: {
            text: {
                spanish: 'Proyectos',
                english: 'Projects'
            },
            path: '/projects'
        },
        resume: {
            text: {
                spanish: 'Currículum',
                english: 'Resume'
            },
            path: '/resume'
        }
    },
    index: {
        aboutTitle: {
            spanish: 'Sobre mí',
            english: 'About me'
        },
        aboutContent: {
            spanish: `Desarrollador Full Stack con especialización en Frontend con 2+ años de experiencia trabajando en ambientes de desarrollo ágil en los que he tenido la oportunidad de trabajar con clientes en el extranjero y de desarrollar mis tanto mis habilidades técnicas como las interpersonales, tales como el trabajo en equipo y la comunicación.`,
            english: `Full Stack developer with specialization in Frontend development with 2+ years of experience working in agile development environments in which I have had the opportunity to work with clients abroad and to develop both my hard and soft skills, such as team work and communication.`
        },
        technologiesTitle: {
            spanish: 'Tecnologías',
            english: 'Technologies'
        },
        pinnedReposTitle: {
            spanish: 'Repositorios destacados',
            english: 'Pinned repos'
        },
        repoCardButtonText: {
            spanish: 'Ir al repositorio',
            english: 'Visit repo'
        }
    },
    projects:{
        demosTitle: {
            spanish: 'Demos',
            english: 'Demos'
        },
        demosContent: {
            spanish: 'Estas son las demos de algunos de los proyectos que he realizado. Se encuentran alojados en servidores gratuitos, por lo que el primer tiempo de carga de cada proyecto podría ser lento.',
            english: 'This projects are hosted on free servers, so load time of this web applications could take a few moments'
        },
        demos: [
            {
                title: {
                    spanish: 'Clon de instagram (2021)',
                    english: 'Instagram clone (2021)'
                },
                description: {
                    spanish: 'Clon de la pagina inicial de Instagram que permite hacer scroll a través de los diferentes posts y stories.',
                    english: "Clone of Instagram's home page where you can scroll through the different posts and stories."
                },
                imageUrl: '/img/ig-clone.png',
                demoButtonText: {
                    spanish: 'Probar demo',
                    english: 'Live demo'
                },
                liveDemoUrl: 'https://ig-clone-manuelrdz.web.app/'
            },
            {
                title: {
                    spanish: 'Clon de Tiktok (2020)',
                    english: 'Tiktok Clone (2020)'
                },
                description: {
                    spanish: 'Aplicación con interfaz gráfica similar a tiktok y que permite deslizar entre videos, pausar y silenciar el video.',
                    english: 'Application with similar user interface to Tiktok that allows to swipe, pause and silence videos'
                },
                imageUrl: '/img/tiktok-clone.png',
                demoButtonText: {
                    spanish: 'Probar demo',
                    english: 'Live demo'
                },
                liveDemoUrl: 'https://manuelrdz-tiktok-clone.web.app/'
            },
            {
                title: {
                    spanish: 'Buscaminas (2020)',
                    english: 'Minesweeper (2020)'
                },
                description: {
                    spanish: `El clásico juego de buscaminas.
                    \n- Descubrir el bloque seleccionado: Click izquierdo
                    \n- Colocar bandera en bloque seleccionado: Click derecho`,
                    english: `The classic minesweeper game.
                    \n- Reveal selected block: Left click
                    \n- Put on a flag over block: Right click`
                },
                imageUrl: '/img/minesweeper.png',
                demoButtonText: {
                    spanish: 'Probar demo',
                    english: 'Live demo'
                },
                liveDemoUrl: 'https://manuelrdz-buscaminas-rea-739a1.web.app/'
            },
        ]
    },
    resume: {
        title: {
            spanish: 'Currículum',
            english: 'Resume'
        },
        downloadButton: {
            spanish: 'Descargar currículum',
            english: 'Download resume'
        },
        resumeButton: {
            spanish: 'Abrir currículum en una pestaña nueva',
            english: 'Open resume in a new tab'
        }
    }
}

export default siteContent
