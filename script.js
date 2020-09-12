window.onload = function() {
  let inputText = document.getElementById('text-input')
  let memeText = document.getElementById('meme-text')
  let memeInsert = document.getElementById('meme-insert')
  let memeImage = document.getElementById('meme-image')


  inputText.addEventListener('keyup', function() {
    memeText.innerText = inputText.value
  })

  memeInsert.addEventListener('change', function(event) {
    
    memeImage.src = URL.createObjectURL(event.target.files[0])
  })
  


}