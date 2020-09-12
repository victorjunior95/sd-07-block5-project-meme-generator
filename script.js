let inputText = document.getElementById("text-input");

inputText.addEventListener("input", function() {
    let previewText = document.getElementById("meme-text");
    previewText.innerHTML = inputText.value;
})

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