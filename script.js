
let textInput   = document.querySelector("#text-input") ,
    imageInput  = document.querySelector("#meme-insert"),
    textOutput  = document.querySelector("#meme-text")  ,
    imageOutput = document.querySelector("#meme-image") ;

textInput.addEventListener("keyup", () => {

    textOutput.innerHTML = textInput.value;

});

imageInput.addEventListener( "change" , event => {

    // Nao entendi ... fonte:https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    imageOutput.src = URL.createObjectURL(event.target.files[0]);

    imageOutput.onload = () => {

    URL.revokeObjectURL(imageOutput.src);

  }

});
