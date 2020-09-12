window.onload = function () {
function createReader () {
    let headerPage = document.createElement('header')
    headerPage.className = 'head-class'
    document.body.appendChild(headerPage)

    let titleProject = document.createElement('h1')
    titleProject.innerHTML = "MEME GENERATOR"
    titleProject.className = 'title-class'
    titleProject.setAttribute('id', 'title')
    headerPage.appendChild(titleProject)
}
createReader()

function createSectionInput () {
    let sectionContainerLeft = document.createElement('section')
    sectionContainerLeft.className = 'container-left'
    document.body.appendChild(sectionContainerLeft)
    
    let inputLabel = document.createElement('label')
    inputLabel.setAttribute('for', 'text-input')
    inputLabel.innerHTML = 'Insira o texto ao MEME: '
    sectionContainerLeft.appendChild(inputLabel)

    let imputText = document.createElement('input')
    imputText.setAttribute('id', 'text-input')
    sectionContainerLeft.appendChild(imputText)
}
createSectionInput()

function creatSectionBody () {
    let sectionContainerRight = document.createElement('section')
    sectionContainerRight.className = 'container-right'
    sectionContainerRight.setAttribute('id', 'meme-image-container')
    document.body.appendChild(sectionContainerRight)

    let src = ''
    let imageMEME = document.createElement('img')
    imageMEME.setAttribute('src', src)
    sectionContainerRight.appendChild(imageMEME)

    let paragraphMEME = document.createElement('p')
    paragraphMEME.setAttribute('id', 'meme-text')
    paragraphMEME.innerHTML = 'Sua frase!!!'
}
creatSectionBody()

    const textInput = document.getElementById("text-input");
    const memeText = document.getElementById("meme-text");
    const memeImage = document.getElementById("meme-image");

    textInput.addEventListener("input", function () {
    memeText.innerText = textInput.value;
})
}