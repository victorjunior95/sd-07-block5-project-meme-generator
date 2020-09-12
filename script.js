//Getting the input value and placing it in the image.
document.querySelector('input#text-input').addEventListener('input', function() {
  document.querySelector('#meme-text').innerText = document.querySelector('input#text-input').value;
});

//Changing the border.
let containerBorder = document.querySelector('#meme-image-container');
document.querySelector('#fire').addEventListener('click', function() {
  containerBorder.classList.remove('default-border');
  containerBorder.style.border = '3px dashed red';
})

document.querySelector('#water').addEventListener('click', function() {
  containerBorder.classList.remove('default-border');
  containerBorder.style.border = '5px double blue';

})

document.querySelector('#earth').addEventListener('click', function() {
  containerBorder.classList.remove('default-border');
  containerBorder.style.border = '6px groove green';
})