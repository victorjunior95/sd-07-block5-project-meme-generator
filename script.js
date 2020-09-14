function loadFile(event) {
   const Image = document.getElementById("meme-image");
   Image.src = URL.createObjectURL(event.target.files[0]);
 }

const textInput = document.getElementById('text-input');

textInput.addEventListener('input', function() {
   memeText = document.getElementById('meme-text')
   memeText.innerHTML = textInput.value
});

const buttonChoice = document.getElementById("meme-insert");

buttonChoice.addEventListener("change", function(event) {
  loadFile(event);
});