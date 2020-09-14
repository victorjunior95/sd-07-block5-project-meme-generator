// criado variaveis
const yourtext = document.getElementById("text-input");
let youtcontent = document.getElementById("meme-text");

/*
configura uma função que será chamada sempre que o evento especificado for entregue ao destino.
referencia 
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener 
*/

yourtext.addEventListener("keyup", function(typeLetters){
    youtcontent.innerText = typeLetters.target.value;
})

// criado variavel para guarda a imagem e a url
let yourImg = document.getElementById("meme-insert");
let imageContent = document.getElementById("meme-image");


// função para enviar a image para o id meme-image
yourImg.addEventListener("change", function(){
    imageContent.src = window.URL.createObjectURL(this.files[0]);
})
