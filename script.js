//  Trata evento de inserção de texto sobre a imagem
document.querySelector('#text-input').setAttribute('maxlength', 60);
const textInputBox = document.querySelector('#text-input');
textInputBox.addEventListener('keyup', function () {
  const textInput = document.querySelector('#text-input').value;
  const textMeme = document.querySelector('#meme-text');
  textMeme.innerText = textInput;
});
//  Trata evento de inserção de imagem pelo usuário
const memeImage = document.querySelector('#meme-image');
const memeInput = document.querySelector('#meme-insert');
function upLoadImg(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
}
memeInput.addEventListener('change', upLoadImg);
// Trata evento de trocar a borda do conteiner conforme usuário escolhe
const imageBox = document.querySelector('#meme-image-container');
const btnFire = document.querySelector('#fire');
btnFire.addEventListener('click', function () {
  imageBox.style.border = 'dashed 3px  red';
});
const btnWater = document.querySelector('#water');
btnWater.addEventListener('click', function () {
  imageBox.style.border = 'double 5px  blue';
});
const btnEarth = document.querySelector('#earth');
btnEarth.addEventListener('click', function () {
  imageBox.style.border = 'groove 6px  green';
});
