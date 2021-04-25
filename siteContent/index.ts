import { SiteContentMap } from '../interfaces';

const siteContent: SiteContentMap = {
    index: {
        aboutTitle: {
            spanish: 'Sobre mí',
            english: 'About me'
        },
        aboutContent: {
            spanish: `Egresé de la Univesidad Autónoma de Nuevo León en el año 2021 como lic. en tecnologías de la información. 
            Durante la pandemia me dí cuenta de la enorme cantidad de cursos sobre desarrollo de software que podía encontrar en plataformas como Udemy y YouTube. Desde entonces no paro de aprender.
            \nConsidero que el desarrollo de software es una manera divertida de dar solución a problemas con una experiencia agradable.`,
            english: `I graduated from the Universidad Autónoma de Nuevo León in 2021 with an IT degree. During the lockdown I realized the huge quantity of courses about software development that 
            can be found in platforms like Udemy and Youtube. Since then I keep learning.
            \n`
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
                    spanish: 'Clon de Tiktok',
                    english: 'Tiktok Clone'
                },
                description: {
                    spanish: 'Aplicación con interfaz gráfica similar a tiktok y que permite deslizar entre videos, pausar y silenciar el video.',
                    english: 'Application with similar graphic user interface as Tiktok that allows to swipe, pause and silence videos'
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
                    spanish: 'Buscaminas',
                    english: 'Minesweeper'
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
                liveDemoUrl: 'https://manuelrdz-buscaminas.web.app/'
            },
            {
                title: {
                    spanish: 'Sala de chat',
                    english: 'Chat room'
                },
                description: {
                    spanish: 'Una sala de chat en la que varios participantes se pueden unir para compartir mensajes de manera instantánea.',
                    english: 'A chat room where you can share instant messages with multiple users'
                },
                imageUrl: '/img/chat.png',
                demoButtonText: {
                    spanish: 'Probar demo',
                    english: 'Live demo'
                },
                liveDemoUrl: 'http://marg-react-chat.herokuapp.com/login'
            }
        ]
    }
}

export default siteContent
