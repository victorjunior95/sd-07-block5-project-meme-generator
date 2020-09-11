

window.onload = function() {
  
  let textInput = document.querySelector('#text-input');
  let memeText = document.querySelector('#meme-text')

  // insere texto digitado no input dentro do container do meme
  textInput.addEventListener('keyup', function() {
    memeText.innerText = textInput.value;
  });


  
}