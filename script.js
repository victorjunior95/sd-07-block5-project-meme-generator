let divDoMeme = document.querySelector("#meme-image-container");
let caixaTexto = document.querySelector("#text-input");
let botaoDaFoto = document.querySelector("#meme-insert");
let containerDoMeme = document.getElementById("meme-image-container");
let divDaImagem = document.querySelector("#meme-image");
let divDoTexto = document.querySelector("#meme-text");
let tagImg = document.querySelector("#preview-image");
function aparecerTexto (){
    containerDoMeme.innerText=caixaTexto.value;             
}
caixaTexto.addEventListener("keyup", aparecerTexto);

function aparecerImagem (event) {
     tagImg.src=URL.createObjectURL(event.target.files[0]);
    
}
