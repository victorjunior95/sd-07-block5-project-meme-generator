//Inserindo o texto
let entrada = document.querySelector(".caixa-texto");
let legenda = document.querySelector(".meme-text");

entrada.addEventListener("change",function(){
    
legenda.innerText = entrada.value; 
console.log(legenda.innerText);
})






// Inserindo a imagem

var loadFile = function(event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };


