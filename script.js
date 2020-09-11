let inputMemeText = document.getElementById('text-input');
let inputMemeImage = document.getElementById('meme-insert');
let containerMeme = document.getElementById('meme-image-container');

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
  let imgWidth, imgHeight;

  imgMeme.src = URL.createObjectURL(e.target.files[0]);
  imgMeme.onload = function(){
    URL.revokeObjectURL(imgMeme.src);

    imgWidth = imgMeme.width + 'px';
    imgHeight = imgMeme.height + 'px';
  }
  console.log(imgHeight + ' ' + imgWidth);
  containerMeme.width = imgWidth;
  containerMeme.height = imgHeight;
  //console.log(imgWidth + '  ' + imgHeight);
}

function fillText(e){

  if(e.keyCode === 13){
    let memeText = document.getElementById('meme-text');

    if( !findText() ){
      createText();

      let newMemeText = document.getElementById('meme-text');

      newMemeText.innerText = inputMemeText.value;

    }else{

      memeText.innerText = inputMemeText.value;
    }


  }

}

inputMemeText.addEventListener('keyup', fillText);
inputMemeImage.addEventListener('change', loadImg);
