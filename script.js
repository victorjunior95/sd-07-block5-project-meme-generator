// funções que iniciarão quando o Dom estiver carregado
function initialize() {

  //Abre imagem adicionada pelo usuário no Container
  loadFile();
  //Carrega texto digitado sobre a imagem;
  textInput();

};

/* Nao entendi ... fonte:
https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
*/
let loadFile = function(event) {
  let output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src);
  }
};


let textInput = function() {

  document.querySelector("#meme-text").innerHTML = document.querySelector("#text-input").innerHTML;

};

document.querySelector('DOMContentLoaded', initialize());
