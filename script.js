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

//colocando botao nos memes
let meme1 = document.querySelector("#meme-1");
meme1.addEventListener("click",function(){
    document.getElementById('meme-image').src = "imgs/meme1.jpg";
})

let meme2 = document.querySelector("#meme-2");
meme2.addEventListener("click",function(){
    document.getElementById('meme-image').src = "imgs/meme2.jpg";
})

let meme3 = document.querySelector("#meme-3");
meme3.addEventListener("click",function(){
    document.getElementById('meme-image').src = "imgs/meme3.jpg";
})

let meme4 = document.querySelector("#meme-4");
meme4.addEventListener("click",function(){
    document.getElementById('meme-image').src = "imgs/meme4.jpg";
})

