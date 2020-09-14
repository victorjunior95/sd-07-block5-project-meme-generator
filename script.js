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

