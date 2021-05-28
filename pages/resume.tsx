import { useContext } from "react"
import Container from "../components/Container"
import Layout from "../components/Layout"
import Title from "../components/Title"
import { ContentContext } from "../context/SiteContent"
import dynamic from 'next/dynamic'

const PDFViewer = dynamic(import('../components/PDFViewer'), { ssr: false })

const Resume = () => {
    const {content: {resume}} = useContext(ContentContext)

    

    return (
        <Layout pageName='Resume'>
            <Container>
                <Title>{resume.title}</Title>

                <PDFViewer />
                
            </Container>
        </Layout>
    )
}

export default Resume
