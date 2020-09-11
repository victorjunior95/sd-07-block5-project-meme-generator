let inputMemeText = document.getElementById('text-input');
let memeTextArea = document.getElementById('meme-text');
let inputMemeImage = document.getElementById('meme-insert');
let containerMeme = document.getElementById('meme-image-container');

function createImg(){
  let imgMeme = document.createElement('img');
  imgMeme.id = 'meme-image';
  imgMeme.alt = 'Meme Image';

  containerMeme.appendChild(imgMeme);
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

  if( !findImg() ){
    if(e.keyCode === 13){
      console.log(inputMemeText.value);
      memeTextArea.innerText = inputMemeText.value;
    }
  }else{

    console.log('oin');
  }
}

inputMemeText.addEventListener('keyup', fillText);
inputMemeImage.addEventListener('change', loadImg);
