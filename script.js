let inputElement = document.querySelector("#file-input") //variáve de entrada
inputElement.addEventListener('change', function () {
    let imgElement = document.querySelector("#meme-image"); //variável de saida    
    imgElement.src = URL.createObjectURL(this.files[0]);
    imgElement.onload = function() {
        URL.revokeObjectURL(this.src);
    }
});

let textImput = document.querySelector("#text-input"); //variável de entrada
textImput.addEventListener('change', function(param) {
    let memeText = document.querySelector("#meme-text"); //variável de saida
   memeText.textContent = param.target.value;
})
