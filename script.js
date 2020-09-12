const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

textInput.addEventListener('input', function () {
  memeText.innerText = textInput.value;
});

const carregarImagem = function (event) {
  const leitor = new FileReader();
  leitor.onload = function () {
    const saida = document.getElementById('meme-image');
    saida.src = leitor.result;
  };
  leitor.readAsDataURL(event.target.files[0]);
};
