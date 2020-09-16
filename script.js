document.querySelector('load', () => {

  loadFile();
  textInput();

});

/* Nao entendi ... fonte:
https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
*/
let loadFile = event => {
  let output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src);
  }
};


let textInput = () => {

  document.querySelector("#meme-text").innerHTML = document.querySelector("#text-input").value;

};