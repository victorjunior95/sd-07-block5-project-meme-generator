let inputMemeText = document.getElementById('text-input');
let memeTextArea = document.getElementById('meme-text');
let inputMemeImage = document.getElementById('meme-insert');
let imageMeme = document.getElementById('meme-image');

function findImg(){
  if( imageMeme != null) {
    return true;
  }else{
    return false;
  }
}

function loadImg(e){
  console.log(e);
}

function fillText(e){

  if( !findImg() ){
    if(e.keyCode === 13){
      console.log(inputMemeText.value);
      memeTextArea.innerText = inputMemeText.value;
    }
  }
}

inputMemeText.addEventListener('keyup', fillText);
inputMemeImage.addEventListener('change', loadImg);
