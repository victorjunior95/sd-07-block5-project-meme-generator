let inputMemeText = document.getElementById('text-input');
let memeTextArea = document.getElementById('meme-text');
let inputMemeImage = document.getElementById('meme-insert');
let containerMeme = document.getElementById('meme-image-container');

function createText(){

}

function createImg(){
  let imgMeme = document.createElement('img');
  imgMeme.id = 'meme-image';
  imgMeme.alt = 'Meme Image';

  containerMeme.append(imgMeme);
}

function findImg(){
  let imageMeme = document.getElementById('meme-image');

  if( imageMeme != null) {
    return true;
  }else{
    return false;
  }
}

function loadImg(e){

  if( !findImg() ) {
    createImg()
  }
  let imgMeme = document.getElementById('meme-image');

  imgMeme.src = URL.createObjectURL(e.target.files[0]);
  imgMeme.onload = function(){
    URL.revokeObjectURL(imgMeme.src);
  }
  console.log('carrega a imagem');
}

function fillText(e){

  if(e.keyCode === 13){
    if( !findImg() ){
      console.log(inputMemeText.value);
      memeTextArea.innerText = inputMemeText.value;
    }else{
      memeTextArea.innerText = inputMemeText.value;
    }
  }

}

inputMemeText.addEventListener('keyup', fillText);
inputMemeImage.addEventListener('change', loadImg);
