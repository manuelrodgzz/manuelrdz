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
            spanish: `Mi primer contacto con la programación fue en una clase de la preparatoria; recuerdo tener esa sesación de satisfacción al solucionar los ejercicios que el profesor nos asignaba. Fue a partir de ahí quise aprender más acerca del desarrollo de software, por lo que decidí estudiar una carrera de TI.
            Egresé de la Univesidad Autónoma de Nuevo León en el año 2021 como lic. en tecnologías de la información pero mientras cursaba la carrera y hasta la fecha he estado descubriendo y aprendiendo nuevos lenguajes y frameworks de desarrollo de software que me han permitido conocer distintas estrategias para dar solución a un problema.`,
            english: `The first contact I had with programming was in a highschool subject; I remember having that satisfaction feeling while I was solving the excercises that the professor assigned to my classmates and me. Since then I knew I wanted to learn more about software development, so I decided to study an IT university degree.
            I graduated from the Universidad Autónoma de Nuevo León in 2021 with an IT bachelor degree but since I was in studying and until until now I've been finding out and learning new programming languages and frameworks. That has allowed me to know new strategies to solve problems`
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
                liveDemoUrl: 'https://manuelrdz-chat-react.web.app/'
            }
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
