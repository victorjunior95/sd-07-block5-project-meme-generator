const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const imgContainer = document.getElementById('meme-image-container');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');
const memeImage = document.getElementById('meme-image');

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

fire.addEventListener('click', function () {
  imgContainer.style.border = '3px dashed red';
  // imgContainer.style.width = '497px';
});

water.addEventListener('click', function () {
  imgContainer.style.border = '5px double blue';
  // imgContainer.style.width = '495px';
});

earth.addEventListener('click', function () {
  imgContainer.style.border = '6px groove green';
  // imgContainer.style.width = '494px';
});

meme1.addEventListener('click', function () {
  memeImage.src = 'imgs/meme1.png';
});

meme2.addEventListener('click', function () {
  memeImage.src = 'imgs/meme2.png';
});

meme3.addEventListener('click', function () {
  memeImage.src = 'imgs/meme3.png';
});

meme4.addEventListener('click', function () {
  memeImage.src = 'imgs/meme4.png';
});
