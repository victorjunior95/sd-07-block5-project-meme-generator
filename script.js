let inputMemeText = document.getElementById('text-input');
let memeTextArea = document.getElementById('meme-text');

inputMemeText.addEventListener('keyup', fillText);

function fillText(e){

  if(e.keyCode === 13){
    console.log(inputMemeText.value);
    memeTextArea.innerText = inputMemeText.value;
  }
}

