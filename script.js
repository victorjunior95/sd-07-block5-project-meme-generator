//Inserindo o texto
let entrada = document.querySelector(".caixa-texto");
entrada.id = 'meme-image-container';
let legenda = document.querySelector(".meme-text");

entrada.addEventListener("change",function(){
    
legenda.innerText = entrada.value; 
console.log(legenda.innerText);
})






// Inserindo a imagem

// var carregar = function (event){
//     let imagem = document.querySelector(".image");
//     imagem.scr = URL.createObjectURL(event.target.files[0]);
//     console.log(imagem.src)
//     imagem.onload = function() {
//         URL.revokeObjectURL(imagem.src) // limpar memória
//       }
// }

var loadFile = function(event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  };


