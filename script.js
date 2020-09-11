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




// let inputImage = document.getElementById("meme-insert");

// inputImage.addEventListener("input", function() {
//     let previewImage = document.getElementById("meme-image");
//     previewImage.innerHTML = inputImage.value;
//     previewImage.src = URL.createObjectURL(this.files[0]);
//     previewImage.onload = function() {
//         URL.revokeObjectURL(previewImage.src);
//       }
// })