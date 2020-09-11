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

  imgMeme.src = URL.createObjectURL(e.target.files[0]);
  imgMeme.onload = function(){
    URL.revokeObjectURL(imgMeme.src);
  }
  console.log('carrega a imagem');
}

function fillText(e){

  if(e.keyCode === 13){
    let memeText = document.getElementById('meme-text');

    if( !findImg() ){

      if( !findText() ){
        let newMemeText = document.getElementById('meme-text');

        createText();

        newMemeText.innerText = inputMemeText.value;

      }else{

        memeText.innerText = inputMemeText.value;
      }
    }else{
      console.log('achou foto');
    }
  }

}

inputMemeText.addEventListener('keyup', fillText);
inputMemeImage.addEventListener('change', loadImg);
