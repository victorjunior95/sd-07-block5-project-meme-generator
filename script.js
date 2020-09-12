// Input e pré-visualização do texto inserido pelo usuário

let inputText = document.getElementById("text-input");

inputText.addEventListener("input", function() {
    let previewText = document.getElementById("meme-text");
    previewText.innerHTML = inputText.value;
})

// Input e pré-visualização da imagem inserida pelo usuário via input file

// Função baseada no código disponível em https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/

function readImage() {
    if (this.files && this.files[0]) {
        let file = new FileReader();
        file.onload = function(e) {
            document.getElementById("imageMemeInput").src = e.target.result;
        };
        file.readAsDataURL(this.files[0])
    }
}

document.getElementById("meme-insert").addEventListener("change", readImage, false);

// Adicionando configurações de borda ao clicar nos botões

function bordaFire() {
    document.getElementById('meme-image-container').style.borderWidth = '3px'
    document.getElementById('meme-image-container').style.borderStyle = 'dashed'
    document.getElementById('meme-image-container').style.borderColor = 'red'  
}

function bordaWater() {
    document.getElementById('meme-image-container').style.borderWidth = '5px'
    document.getElementById('meme-image-container').style.borderStyle = 'double'
    document.getElementById('meme-image-container').style.borderColor = 'blue'  
}

function bordaEarth() {
    document.getElementById('meme-image-container').style.borderWidth = '6px'
    document.getElementById('meme-image-container').style.borderStyle = 'groove'
    document.getElementById('meme-image-container').style.borderColor = 'green'  
}

// Adicionando os templetes ao clicar nas miniaturas dos memes

function tempDev() {
    document.getElementById('imageMemeInput').src = './imgs/meme1.png'
}

function tempCry() {
    document.getElementById('imageMemeInput').src = './imgs/meme2.png'
}

function tempStark() {
    document.getElementById('imageMemeInput').src = './imgs/meme3.png'
}

function tempSad() {
    document.getElementById('imageMemeInput').src = './imgs/meme4.png'
}