//  Trata evento de inserção de texto sobre a imagem
document.querySelector('#text-input').setAttribute('maxlength', 60);
const textInputBox = document.querySelector('#text-input');
textInputBox.addEventListener('keyup', function () {
  const textInput = document.querySelector('#text-input').value;
  const textMeme = document.querySelector('#meme-text');
  textMeme.innerText = textInput;
});
//  Trata evento de inserção de imagem pelo usuário
let memeImage = document.querySelector('#meme-image');
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
//  Trata o evento de trocar imagem por uma escolhida pelo usuário na página
//botões
let btn_meme1 = document.querySelector('#btn-meme1');
let btn_meme2 = document.querySelector('#btn-meme2');
let btn_meme3 = document.querySelector('#btn-meme3');
let btn_meme4 = document.querySelector('#btn-meme4');

//inputs
let meme1 = document.querySelector('#meme1');
let meme2 = document.querySelector('#meme2');
let meme3 = document.querySelector('#meme3');
let meme4 = document.querySelector('#meme4');


btn_meme1.addEventListener('click', function () {
  memeImage.src = meme1.src;
});

btn_meme2.addEventListener('click', function () {
  memeImage.src = meme2.src;
});

btn_meme3.addEventListener('click', function () {
  memeImage.src = meme3.src;
});

btn_meme4.addEventListener('click', function () {
  memeImage.src = meme4.src;
});



