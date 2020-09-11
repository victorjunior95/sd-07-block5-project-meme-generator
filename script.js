function insereTexto() {
    const textMeme = document.querySelector('#meme-text');
  textMeme.innerText = text.value;
}

let text = document.querySelector('#text-input');
text.addEventListener('input', insereTexto);

function insereImagem(event) {
    
    let imageMeme = document.querySelector('#meme-image');
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
}

let memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', insereImagem);

let container = document.getElementById('meme-image-container');

function bordaFire() {
    container.style.border = "3px dashed red";
}

function bordaWater() {
    container.style.border = "5px double blue";
}

function bordaEarth() {
    container.style.border = "6px groove green";
}

let buttonFire = document.getElementById('fire');
buttonFire.addEventListener('click', bordaFire);
let buttonWater = document.getElementById('water');
buttonWater.addEventListener('click', bordaWater);
let buttonEarth = document.getElementById('earth');
buttonEarth.addEventListener('click', bordaEarth);
