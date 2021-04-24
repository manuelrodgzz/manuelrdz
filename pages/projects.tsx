import React from 'react'
import Block from '../components/Block'
import Container from '../components/Container'
import Demo from '../components/Demo'
import Layout from '../components/Layout'

const projects = () => {
    return (
        <Layout>
            <Container>
                <Block title='Demos'>
                <div className='mb-12'>
                Estas son las demos de algunos de los proyectos que he realizado. Se encuentran alojados en servidores gratuitos, por lo que el primer tiempo de carga de cada proyecto podría ser lento.
                </div>
                <Demo imageSrc='/img/tiktok-clone.png' title='Tiktok clone'>
                    Aplicación con interfaz gráfica similar a tiktok y que permite deslizar entre videos, 
                    pausar y silenciar el video.
                </Demo>

                <Demo imageSrc='/img/minesweeper.png' reverse title='Minesweeper'>
                    El clásico juego de buscaminas.
                    <br/>
                    - Descubrir el bloque seleccionado: Click izquierdo
                    <br/>
                    - Colocar bandera en bloque seleccionado: Click derecho
                </Demo>

                <Demo imageSrc='/img/chat.png' title='Chat'>
                    Una sala de chat en la que varios participantes se pueden unir para compartir mensajes de manera instantánea.
                </Demo>
                </Block>
            </Container>
        </Layout>
    )
}

export default projects
