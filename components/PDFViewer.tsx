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

    const fileName = `manuel-rodriguez-${currentLanguage === 'spanish' ? 'cv' : 'resume'}.pdf`

    const onDocumentLoadSuccess = ({numPages}: any) => {
        setNumPages(numPages)
    }

    const DownloadButton = () => (
        <Button text={resume.downloadButton} href={'/' + fileName} download={fileName} className='mb-5' icon={faFileDownload}/>
    )

    return (
        <>
            <div className='hidden md:flex flex-col items-center p-5'>

                <DownloadButton />

                <Document 
                    file={'/' + fileName}
                    onLoadSuccess={onDocumentLoadSuccess}
                    className=''
                >
                    <Page pageNumber={pageNumber}/>
                </Document>

                <div className='m-5 py-1 px-2 bg-white text-gray-500 rounded-full'>
                    <p>{currentLanguage === 'english' ? 'Page' : 'Página'} {pageNumber} {currentLanguage === 'english' ? 'of' : 'de'} {numPages}</p>
                </div>
            </div>

            <div className='md:hidden flex flex-col items-center'>
                <DownloadButton />
            </div>
        </>
    )
}

export default PDFViewer
