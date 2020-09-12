// Capturando o texto;

let message = document.querySelector('#text-input');
message.addEventListener('keyup', function() {
  let text = message.value;
  console.log(text);
  printMessage(text);
});

// Printando o texto;

function printMessage(text) {
  document.querySelector('#meme-text').innerText = text;  
}

// capturando e inserindo a imagem;

let inputImage = document.querySelector('#meme-insert');

// evento 'change' quando alterar o valor;

inputImage.addEventListener('change', function(event) {
  inputImage = inputImage.value;

  let image = document.querySelector('#meme-image');
  // https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURL#Syntax <<< Cria um objeto URL(event.targe) vai me retornar caminho do evento change .files me retorna um array de arquivos, o selecionado é o primeiro do array
  
  image.src = URL.createObjectURL(event.target.files[0]);
  changeSizeContainer(image);
});

// Alterando o tamanho do container

function changeSizeContainer(image) {
  let container = document.querySelector('#meme-image-container');
  console.log(container.style.whidth);
  console.log(image.setoffWidth);
  container.style.whidth = image.setoffWidth;
  container.style.heigth = image.setoffHeight;
}
