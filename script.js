window.onload = function () {
  let img = document.querySelector('img')
  let upload = document.querySelector('#meme-insert')
  let text = document.querySelector('#text-input')
  let memeText = document.querySelector('#meme-text')
  
  
  let openImage = function(event) {
    console.log(upload.value)
    img.src = URL.createObjectURL(event.target.files[0]);
    img.width = 'fit-content'; 
  };
  
  upload.addEventListener('change', openImage)

  text.addEventListener('input', function() {
    memeText.innerText = text.value
  })
}
  
