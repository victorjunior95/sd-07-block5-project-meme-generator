const script = document.querySelector('#text-input');
let setImage = document.querySelector('#meme-insert');
const picture = document.querySelector('#meme-image');

let earth = document.querySelector('#changeButtons').childNodes[7];
let water = document.querySelector('#changeButtons').childNodes[5];
let fire = document.querySelector('#changeButtons').childNodes[3];
let container = document.querySelector('#meme-image-container');

//Recupera o local onde quero minha string
script.addEventListener('keyup', function () {
    document.querySelector('#meme-text').innerText = script.value;
});

setImage.addEventListener('change', function(event){
    setImage = setImage.value;
    picture.src = URL.createObjectURL(event.target.files[0]);
});

fire.addEventListener('click', function () {
    container.style.border = '3px dashed #DC143C';
});

water.addEventListener('click', function () {
    container.style.border = '5px double #00BFFF';
});

earth.addEventListener('click', function () {
    container.style.border = '5px groove #32CD32';
});