const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});

let carregarImagem = function (event) {
  let leitor = new FileReader();
  leitor.onload = function () {
    let saida = document.getElementById('meme-image');
    saida.src = leitor.result;
  };
  leitor.readAsDataURL(event.target.files[0]);
};
