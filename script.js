const inputImage = document.querySelector('input.file-upload');
const inputText = document.querySelector('input.text-input');
const imageElement = document.querySelector('.meme-image');
const buttonWater = document.querySelector('.water');
const buttonEarth = document.querySelector('.earth');
const buttonFire = document.querySelector('.fire');

inputText.addEventListener('keyup', showText);

inputImage.addEventListener('change', createImageElement, true);

buttonWater.addEventListener('click', turnBorderWater);

buttonFire.addEventListener('click', turnBorderFire);

buttonEarth.addEventListener('click', turnBorderEarth);

function createImageElement() {
    url = document.querySelector('input.file-upload').files[0];
    imageElement.style.backgroundImage = "url("+URL.createObjectURL(inputImage.files[0])+")"
}


function showText() {
    texto = inputText.value;
    document.querySelector('.meme-text').innerText = texto;
}

function turnBorderFire(){
    document.querySelector('.meme-image-container').style.border = '3px dashed rgb(255, 0, 0)'
}

function turnBorderWater(){
    document.querySelector('.meme-image-container').style.border = '5px double rgb(0, 0, 255)'
}

function turnBorderEarth(){
    document.querySelector('.meme-image-container').style.border = '6px groove rgb(0, 128, 0)'
}