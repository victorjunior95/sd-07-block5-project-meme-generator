window.onload = function() {
  let inputText = document.getElementById('text-input')
  let memeText = document.getElementById('meme-text')
  let memeImage = document.getElementById('meme-image')

  let memeInsert = document.getElementById('meme-insert')
  

inputText.addEventListener('keyup', function() {
  memeText.innerText = inputText.value
})







}