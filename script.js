// fonte https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const loadFile = function (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src); // free memory
  };
};

const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', function () {
  document.getElementById('meme-text').innerText = textInput.value;
});
const textColor = document.getElementById('text-color');
textColor.addEventListener('change', function () {
  document.getElementById('meme-text').style.color = textColor.value;
});

const memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('change', loadFile);

const fireButton = document.getElementById('fire');
fireButton.addEventListener('click', function(){
    document.getElementById('meme-image-container').style.border = '3px dashed red';
});

const waterButton = document.getElementById('water');
waterButton.addEventListener('click', function(){
    document.getElementById('meme-image-container').style.border = '5px double blue';
});

const earthButton = document.getElementById('earth');
earthButton.addEventListener('click', function(){
    document.getElementById('meme-image-container').style.border = '6px groove green'
});