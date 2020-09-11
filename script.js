let memeImage = document.getElementById('meme-image');
let selectImageId = document.getElementById('select-image');
let divImage = document.getElementById('meme-image-container');
// memeImage.src = window.URL.createObjectURL(imageSelected);

if (memeImage.src === '') {
  console.log('não tem imagem')
  divImage.appendChild(selectImageId);
} 