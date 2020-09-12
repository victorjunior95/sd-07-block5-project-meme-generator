// Capturando o texto;

let message = document.querySelector('#text-input');
message.addEventListener('keyup', function() {
  let text = message.value;
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
});

// alterando bordas

let container = document.querySelector('#meme-image-container');

let buttonFire = document.querySelector('#fire');

buttonFire.addEventListener('click', function() {
  container.style.border = '3px dashed rgb(255 , 0 , 0)';
});

let buttonWater = document.querySelector('#water');

buttonWater.addEventListener('click', function() {
  container.style.border = '5px double rgb(0 , 0 , 255)';
});

let buttonEarth = document.querySelector('#earth');

buttonEarth.addEventListener('click', function() {
  container.style.border = '6px groove rgb(0 , 255 , 0)';
});