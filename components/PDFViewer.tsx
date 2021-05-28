import { useContext, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { ContentContext } from "../context/SiteContent"
import Button from "./Button";
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = () => {

    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const {content: {resume} ,currentLanguage} = useContext(ContentContext)

    const onDocumentLoadSuccess = ({numPages}: any) => {
        setNumPages(numPages)
    }

    const pdfPath = `/manuel-rodriguez-${currentLanguage === 'spanish' ? 'cv' : 'resume'}.pdf`

    return (
        <>
            <div className='hidden md:flex flex-col items-center p-5'>

                <Button text={resume.downloadButton} href={pdfPath} className='mb-5' icon={faFileDownload}/>

                <Document 
                    file={pdfPath}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className=''
                >
                    <Page pageNumber={pageNumber}/>
                </Document>

                <div className='m-5 py-1 px-2 bg-white text-gray-500 rounded-full'>
                    <p>{currentLanguage === 'english' ? 'Page' : 'Página'} {pageNumber} {currentLanguage === 'english' ? 'of' : 'de'} {numPages}</p>
                </div>
            </div>

            <div className='md:hidden flex justify-center'>
                <Button text={resume.resumeButton} href={pdfPath} className='mt-5'/>
            </div>
        </>
    )
}

export default PDFViewer
