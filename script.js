window.onload = function() {
  let textInput = document.querySelector('#text-input')
  let memeText = document.querySelector('#meme-text')

  textInput.addEventListener('keyup', function(){
    memeText.innerText = textInput.value
  })
}