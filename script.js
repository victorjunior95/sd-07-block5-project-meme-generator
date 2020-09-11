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
// colocando os botões

  let botao1 = document.querySelector("#fire");
  botao1.addEventListener("click",function(){
      document.querySelector("#meme-image-container").style.border = "3px dashed red" 
  })

  let botao2 = document.querySelector("#water");
  botao2.addEventListener("click",function(){
      document.querySelector("#meme-image-container").style.border = "5px double blue"
  })

  let botao3 = document.querySelector("#earth");
  botao3.addEventListener("click",function(){
      document.querySelector("#meme-image-container").style.border = "6px groove green"

  })
//
