//Inserindo o texto

let entrada = document.getElementByClassName("caixa-texto")
entrada.id = 'meme-image-container'
let legenda = document.querySelector(".meme-text");

legenda.innerText = entrada.value; 



// Inserindo a imagem

let imagem = document.querySelector(".imagem");
let imageurl = document.querySelector("#meme-insert"); //caixatexto
imagem.scr = imageurl.value;  
//document.addEventListener()
