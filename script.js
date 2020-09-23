let textMeme = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let memeInsert = document.getElementById('meme-insert');
let buttons = document.querySelectorAll('button');

textMeme.addEventListener('keyup', function (){
  memeText.innerText = textMeme.value;
});


for(let button of buttons){
  button.addEventListener('click', function () {
    let memeImageContainer = document.getElementById('meme-image-container');
    let border = window.getComputedStyle(button, null)
    .getPropertyValue("border");
    memeImageContainer.style.border = border;  
  });
}
