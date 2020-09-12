let inputMemeText = document.getElementById('text-input');
let inputMemeImage = document.getElementById('meme-insert');
let containerMeme = document.getElementById('meme-image-container');
let newMemeText = document.getElementById('meme-text');

function createText(){
  let memeTextArea = document.createElement('div');
  memeTextArea.id = 'meme-text';

  containerMeme.append(memeTextArea);
}

function createImg(){
  let imgMeme = document.createElement('img');
  imgMeme.id = 'meme-image';
  imgMeme.alt = 'Meme Image';

  containerMeme.append(imgMeme);
}

function findText(){
  let textMeme = document.getElementById('meme-text');

  if( textMeme != null) {
    return true;
  }else{
    return false;
  }
}

function findImg(){
  let imageMeme = document.getElementById('meme-image');

  if( imageMeme != null) {
    return true;
  }else{
    console.log('nao achou foto');
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

  imgMeme.addEventListener('load', resizeDiv);

  //imgMeme.style.top = '-' + newMemeText.clientHeight + 'px';
  console.log(newMemeText.height);
}

function resizeDiv(e){
  let widthImg = e.path[0].clientWidth;
  let heightImg = e.path[0].clientHeight;
  let heightText = 0;
  const px = 'px';

  if( findText() ){
    heightText = newMemeText.clientHeight;
  }
  console.log(widthImg);
  containerMeme.style.height = (heightImg) + px;
  containerMeme.style.width = (widthImg) + px;
  newMemeText.style.maxWidth = widthImg + px;
 // newMemeText.style.top = (widthImg - 100) + px;
}

function fillText(e){


    let memeText = document.getElementById('meme-text');

    if( !findText() ){
      createText();

      let newMemeText = document.getElementById('meme-text');

      newMemeText.innerText = inputMemeText.value;

    }else{
      memeText.innerText = inputMemeText.value;
    }




}

inputMemeText.addEventListener('keyup', fillText);
inputMemeImage.addEventListener('change', loadImg);
