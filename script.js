let divDoMeme = document.querySelector("#meme-image-container");
let caixaTexto = document.querySelector("#text-input");
let botaoDaFoto = document.querySelector("#meme-insert");
let containerDoMeme = document.getElementById("meme-image-container");
let divDaImagem = document.querySelector("#meme-image");
let divDoTexto = document.querySelector("#meme-text");
let tagImg = document.querySelector("#preview-image");
let botaoVermelho = document.querySelector(".botaoVermelho");
let botaoVerde = document.querySelector(".botaoVerde");
let botaoAzul = document.querySelector(".botaoAzul");
function aparecerTexto (){
    divDoTexto.innerText=caixaTexto.value;
                
}
caixaTexto.addEventListener("keyup", aparecerTexto);


function aparecerImagem (event) {
     tagImg.src=URL.createObjectURL(event.target.files[0]);
    
}
function bordasVermelhas (){
    containerDoMeme.style.border= "4px solid red";
}
botaoVermelho.addEventListener("click", bordasVermelhas);

function verde (){
    containerDoMeme.style.border= "4px solid green";
}
botaoVerde.addEventListener("click", verde);

function azul (){
    containerDoMeme.style.border= "4px solid blue";
}
botaoAzul.addEventListener("click", azul);