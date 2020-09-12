window.onload = function() {
  let inputText = document.getElementById('text-input')
  let memeText = document.getElementById('meme-text')
  let memeInsert = document.getElementById('meme-insert')
  let memeImage = document.getElementById('meme-image')
  let memeImageContainer = document.getElementById('meme-image-container')

  let fireButton = document.getElementById('fire')
  let waterButton = document.getElementById('water')
  let earthButton = document.getElementById('earth')

  let memeOne = document.getElementById("meme-1")
  let memeTwo = document.getElementById("meme-2")
  let memeThree = document.getElementById("meme-3")
  let memeFour = document.getElementById("meme-4")

  fireButton.addEventListener('click', function() {
    memeImageContainer.style.border = '3px dashed red'
  })

  waterButton.addEventListener('click', function() {
    memeImageContainer.style.border = '5px double blue'
  })

  earthButton.addEventListener('click', function() {
    memeImageContainer.style.border = '6px groove green'
  })


  inputText.addEventListener('keyup', function() {
    memeText.innerText = inputText.value
  })

  memeInsert.addEventListener('change', function(event) {
  
    memeImage.src = URL.createObjectURL(event.target.files[0])
  })


  memeOne.addEventListener('click', chooseMiniature)
  memeTwo.addEventListener('click', chooseMiniature)
  memeThree.addEventListener('click', chooseMiniature)
  memeFour.addEventListener('click', chooseMiniature)


  function chooseMiniature(event) {
    memeImage.src = event.target.src
  }
}