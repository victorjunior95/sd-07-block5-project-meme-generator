const textOutput = document.querySelector('#meme-text');
const imageBox = document.querySelector('#meme-image-container');
document.querySelector('#text-input').addEventListener('keyup', (event) => {
  textOutput.innerHTML = event.target.value;
});

document.querySelector('#meme-insert').addEventListener('change', (event) => {
  const image = document.querySelector('#meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
});

document.querySelector('.f').addEventListener('click', () => {
  imageBox.style.border = '3px dashed red';
});
document.querySelector('.w').addEventListener('click', () => {
  imageBox.style.border = '5px double blue';
});
document.querySelector('.e').addEventListener('click', () => {
  imageBox.style.border = '6px groove green';
});
