const inputText = document.getElementById('text-input');
inputText.addEventListener('input', function () {
  let memeText = document.getElementById('meme-text');
  memeText.innerHTML = inputText.value;
}); 

const inputImg = document.getElementById('meme-insert');
const imgElement = document.getElementById('meme-image');

inputImg.addEventListener('change', function () {
  let url = URL.createObjectURL(inputImg.files[0]);
  imgElement.src = url;
});
