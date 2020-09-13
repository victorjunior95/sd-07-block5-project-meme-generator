function createReader() {
  const headerPage = document.createElement('header')
  headerPage.className = 'head-class'
  document.body.appendChild(headerPage)

  let titleProject = document.createElement('h1')
  titleProject.innerHTML = "MEME GENERATOR"
  titleProject.className = 'title'
  headerPage.appendChild(titleProject)
}

const nameNewDiv = ['textInputDiv', 'fileInputDiv', 'memeContainer', 'buttonDiv', 'memeMiniDiv'];
const nameClassNewDiv = ['div-input-text', 'div-input-text', 'meme-container', 'div-button', 'div-mini-meme'];
function createPageStructure (textInputDiv, nameClassDiv) {
  let sectionMain = document.createElement('section')
  sectionMain.className = 'main'
  document.body.appendChild(sectionMain)

  for (let index = 0; index < textInputDiv.length; index += 1) {
    if (textInputDiv[index] === 'memeContainer') {
      textInputDiv[index] = document.createElement('div')
      textInputDiv[index].className = nameClassDiv[index]
      textInputDiv[index].setAttribute('id', 'meme-image-container')
      sectionMain.appendChild(textInputDiv[index])
    } else {
      textInputDiv[index] = document.createElement('div')
      textInputDiv[index].className = nameClassDiv[index]
      sectionMain.appendChild(textInputDiv[index])
    }
  }
}

function createPageElementsText (elementsForText) {
  let inputLabelText = document.createElement('label')
  inputLabelText.setAttribute('for', 'text-input')
  inputLabelText.innerHTML = 'Insira o texto: '
  elementsForText[0].appendChild(inputLabelText)

  let inputText = document.createElement('input')
  inputText.setAttribute('id', 'text-input')
  inputText.setAttribute('type', 'text')
  inputText.setAttribute('maxlength', 60)
  elementsForText[0].appendChild(inputText)

  let textImage = document.createElement('p')
  textImage.className = "meme-text"
  textImage.setAttribute('id', 'meme-text')
  textImage.innerText = 'Texto do MEME!'
  elementsForText[2].appendChild(textImage)
}

function createPageElementsImage (elementsForImage) {
  let inputLabelFile = document.createElement('label')
  inputLabelFile.setAttribute('for', 'file-input')
  inputLabelFile.innerHTML = 'Inserir imagem: '
  elementsForImage[1].appendChild(inputLabelFile)

  let inputFileButton = document.createElement('input')
  inputFileButton.setAttribute('id', 'meme-insert')
  inputFileButton.setAttribute('type', 'file')
  elementsForImage[1].appendChild(inputFileButton)

  let viewImage = document.createElement('img')
  viewImage.className = 'meme-image'
  viewImage.setAttribute('id', 'meme-image')
  viewImage.setAttribute('src', 'https://picsum.photos/500/400')
  elementsForImage[2].appendChild(viewImage)
}
createReader()
createPageStructure(nameNewDiv, nameClassNewDiv)
createPageElementsText(nameNewDiv)
createPageElementsImage(nameNewDiv)

function insertText () {
  const newTextInsert = document.querySelector('#text-input')
  newTextInsert.addEventListener('input', function () {
    if (newTextInsert.value.length <= 60) {
      let pushText = document.querySelector('#meme-text')
      pushText.innerText = newTextInsert.value
    }
  })
}

function insertImage () {
  const viewImageInsert = document.getElementById('meme-image')
  const newImageInsert = document.getElementById('meme-insert')
  newImageInsert.addEventListener('change', function (event) {
  // URL.createObjectURL() = Adicionar a referência ao Ojeto do arquivo
  viewImageInsert.src = URL.createObjectURL(event.target.files[0])
  viewImageInsert.onload = function () {
  // Remover a referência ao arquivo - Verificar real necessidade
  URL.revokeObjectURL(viewImageInsert.src);
  }
})
}
insertText()
insertImage()
