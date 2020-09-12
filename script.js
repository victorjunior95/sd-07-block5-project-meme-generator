window.onload = function() {
  let inputText = document.getElementById('text-input')
  let memeText = document.getElementById('meme-text')
  let memeInsert = document.getElementById('meme-insert')
  let memeImage = document.getElementById('meme-image')

  let fireButton = document.getElementById('fire')
  let waterButton = document.getElementById('water')
  let earthButton = document.getElementById('earth')

  fireButton.addEventListener('click', function() {
    memeImage.style.border = '3px dashed red'
  })

  waterButton.addEventListener('click', function() {
    memeImage.style.border = '5px double blue'
  })

  earthButton.addEventListener('click', function() {
    memeImage.style.border = '6px groove green'
  })


  inputText.addEventListener('keyup', function() {
    memeText.innerText = inputText.value
  })

  memeInsert.addEventListener('change', function(event) {
    
    memeImage.src = URL.createObjectURL(event.target.files[0])
  })


}