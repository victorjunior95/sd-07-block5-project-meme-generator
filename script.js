// let memeImage = document.getElementById('meme-image');
const selectImageId = document.getElementById('select-image');
const divImage = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
// memeImage.src = window.URL.createObjectURL(imageSelected);

if (memeImage.src === '') {
  divImage.appendChild(selectImageId);
  memeText.className = "disappear"
} 
