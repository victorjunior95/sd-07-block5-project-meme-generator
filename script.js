function inputText () {
    const memeText = document.querySelector('#meme-text');
    const textInput = document.querySelector('#text-input');
    textInput.addEventListener('change', () => {
    memeText.innerHTML =  textInput.value;
    });

}

function borderRed () {
    const buttonFire = document.querySelector('#fire')
    const memeImageContainer = document.querySelector('#meme-image-container');
    buttonFire.addEventListener('click', () => {
    memeImageContainer.style.border = '3px dashed red';
    });
}
function borderWater () {
    const buttonWater = document.querySelector('#water')
    const memeImageContainer = document.querySelector('#meme-image-container');
    buttonWater.addEventListener('click', () => {
    memeImageContainer.style.border = '5px double red';
    });
}
function borderEarth () {
    const buttonEarth = document.querySelector('#earth')
    const memeImageContainer = document.querySelector('#meme-image-container');
    buttonEarth.addEventListener('click', () => {
    memeImageContainer.style.border = '6px groove green';
    });
}

function catchImageMemes () {
  const catchMeme1 = document.querySelector('#meme-1');
  const catchMeme2 = document.querySelector('#meme-2');
  const catchMeme3 = document.querySelector('#meme-3');
  const catchMeme4 = document.querySelector('#meme-4');
  const catchImageMeme = document.querySelector('#meme-image-container');
  catchMeme1.addEventListener('click', function(){
  catchImageMeme.style.backgroundImage = "url('./imgs/meme1.png')";
  catchImageMeme.style.backgroundSize = "cover"
  });
  catchMeme2.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme2.png')";
    catchImageMeme.style.backgroundSize = "cover"
  });
  catchMeme3.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme3.png')";
    catchImageMeme.style.backgroundSize = "cover"
  });
  catchMeme4.addEventListener('click', function(){
    catchImageMeme.style.backgroundImage = "url('./imgs/meme4.png')";
    catchImageMeme.style.backgroundSize = "cover"
  });

}


function onLoadImg () {
  const img = document.getElementById('meme-insert');
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = function () {
    URL.revokeObjectURL(img.src);
  } ;
}


window.onload = () => {
    inputText ()
    borderRed ()
    borderWater ()
    borderEarth ()
    catchImageMemes ()
    loadFiles ()    
};
