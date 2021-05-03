import React, { useContext } from 'react'
import Block from '../components/Block'
import Container from '../components/Container'
import Demo from '../components/Demo'
import Layout from '../components/Layout'
import { ContentContext } from '../context/SiteContent'

const projects = () => {

    const {content: {projects: content}} = useContext(ContentContext)

    return (
        <Layout pageName='Projects'>
            <Container>
                <Block title={content.demosTitle}>
                <div className='mb-12'>
                    {content.demosContent}
                </div>
                {
                    content.demos.map((demo, index) => (
                    <Demo key={demo.liveDemoUrl} reverse={(index + 1) % 2 === 0} imageSrc={demo.imageUrl} demoUrl={demo.liveDemoUrl} title={demo.title} demoButtonText={demo.demoButtonText}>
                        {demo.description.split('\n').map((sentence, idx) => <p key={demo.title + 'sentence' + idx}>{sentence}</p>)}
                    </Demo>
                    ))
                }
                </Block>
            </Container>
        </Layout>
    )
}

export default projects
