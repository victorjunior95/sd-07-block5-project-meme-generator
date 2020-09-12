//  1
const textBox = document.querySelector('#text-input');
const textPresentation = document.querySelector('#meme-text');
function showOnImg() {
    textPresentation.innerHTML = textBox.value;
}

textBox.addEventListener('input', showOnImg);

//  2
const source = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
function showTheImg(event) {
    image.src = URL.createObjectURL(event.target.files[0]);
}

source.addEventListener('change', showTheImg);

//  7
const butFire = document.querySelector('#fire');
const butWater = document.querySelector('#water');
const butEarth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');

butFire.addEventListener('click',function() {
    container.style.border = '3px dashed red';
});

butWater.addEventListener('click',function() {
    container.style.border = '5px double blue';
});

butEarth.addEventListener('click',function() {
    container.style.border = '6px groove green';
});



