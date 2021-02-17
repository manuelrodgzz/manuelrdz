
/*********************HTML ELEMENTS***************************** */
const aboutTitle = document.getElementById('about-title')
const aboutContent = document.getElementById('about-content')
const experienceTitle = document.getElementById('experience-title')
const experienceContent = document.getElementById('experience-content')
const projectsTitle = document.getElementById('projects-title')
const projectsMessage = document.getElementById('projects-message')
const projectTitle1 = document.getElementById('project-title-1')
const projectContent1 = document.getElementById('project-content-1')
const projectTitle2 = document.getElementById('project-title-2')
const projectContent2 = document.getElementById('project-content-2')
const projectTitle3 = document.getElementById('project-title-3')
const projectContent3 = document.getElementById('project-content-3')
const certificatesTitle = document.getElementById('certificates-title')
const contact = document.getElementById('contact')
/***************************************************************** */

let selector = document.getElementById('language-selector')

const updateHtml = () => {

    const selectedLangage = selector.options[selector.selectedIndex].value

    try { aboutTitle.innerHTML = oContent[selectedLangage].aboutTitle } catch{}
    try { aboutContent.innerHTML = oContent[selectedLangage].aboutContent } catch{}

    try { experienceTitle.innerHTML = oContent[selectedLangage].experienceTitle } catch{}
    try { experienceContent.innerHTML = oContent[selectedLangage].experienceContent } catch{}

    try { projectsTitle.innerHTML = oContent[selectedLangage].projectsTitle } catch{}
    try { projectsMessage.innerHTML = oContent[selectedLangage].projectsMessage } catch{}

    try { projectTitle1.innerHTML = oContent[selectedLangage].projectTitle1 } catch{}
    try { projectContent1.innerHTML = oContent[selectedLangage].projectContent1 } catch{}
    try { projectTitle2.innerHTML = oContent[selectedLangage].projectTitle2 } catch{}
    try { projectContent2.innerHTML = oContent[selectedLangage].projectContent2 } catch{}
    try { projectTitle3.innerHTML = oContent[selectedLangage].projectTitle3 } catch{}
    try { projectContent3.innerHTML = oContent[selectedLangage].projectContent3 } catch{}

    try { contact.innerHTML = oContent[selectedLangage].contact } catch{}
}

selector.addEventListener('change', updateHtml)

updateHtml()