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

let image = document.querySelector('#meme-insert');
console.log(image);

// evento 'change' quando alterar o valor;

image.addEventListener('change', function(event) {
  image = image.value;
  console.log(image);

  // https://developer.mozilla.org/pt-BR/docs/Web/API/URL/createObjectURL#Syntax <<< Cria um objeto URL(event.targe) vai me retornar caminho do evento change .files me retorna um array de arquivos, o selecionado é o primeiro do array
  
  document.querySelector('#meme-image').src = URL.createObjectURL(event.target.files[0]);
});

