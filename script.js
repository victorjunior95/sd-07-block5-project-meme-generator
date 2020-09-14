/* 
1- Usuário clica em escolher arquivo.
  -Ele seleciona um arquivo ;
  -Arquivo é armazenado em meme-insert ;

2- Evento chama função imgPreview.
  -imgPreview cria (variável ou constant?);
  -imgPreview puxa para variável memeImg a imagem contida em meme-insert;
  -imgPreview carrega imagem em meme-image;

3- Ao Usuário digitar em text-input é chamado função textPreview;
  -textPreview puxa texto;
  -textPreview adiciona texto em meme-text; 
*/

//document.querySelector('DOMContentLoaded', function(){});

//document.querySelector('meme-insert');

//https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
//Procurando outra forma de fazer...
var loadFile = function(event) {

  var memeImage = document.getElementById('meme-image');

  memeImage.src = URL.createObjectURL(event.target.files[0]);

  memeImage.onload = function() {

    URL.revokeObjectURL(memeImage.src)

  }

};

let textInput = function() {

  document.querySelector("#meme-text").innerHTML = document.querySelector("#text-input").innerHTML;

};
