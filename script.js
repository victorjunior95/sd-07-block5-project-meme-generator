let text = document.getElementById('text-input');

text.addEventListener ('keyup', insertText);

function insertText() {    
    let memeText = document.getElementById('meme-text');

    memeText.innerText = text.value;
}

let image = document.getElementById('meme-insert');

image.addEventListener ('change', function (event) {
    let imageOutput = document.getElementById('meme-image');
    imageOutput.src = URL.createObjectURL(event.target.files[0]);    
})

let fireButton = document.getElementById('fire');
let waterButton = document.getElementById('water');
let earthButton = document.getElementById('earth');
let getBorder = document.getElementById('meme-image-container');

fireButton.addEventListener ('click', redBorder);
waterButton.addEventListener ('click', blueBorder);
earthButton.addEventListener ('click', greenBorder);

function redBorder() {
    getBorder.style.border = '3px dashed red';   
}

function blueBorder() {
    getBorder.style.border = '5px double blue';   
}

function greenBorder() {
    getBorder.style.border = '6px groove green';   
}
