window.onload = function() {
  let inputText = document.getElementById('text-input')
  let memeText = document.getElementById('meme-text')
  let memeInsert = document.getElementById('meme-insert')

  

  memeInsert.addEventListener('change', function(event) {
    let memeImage = document.getElementById('meme-image')
    memeImage.src = URL.createObjectURL(event.target.files[0])
  })
  
  
inputText.addEventListener('keyup', function() {
  memeText.innerText = inputText.value
})







}