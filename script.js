function loadFile(event) {
  const loadImage = document.getElementById("meme-image");
  loadImage.src = URL.createObjectURL(event.target.files[0]);
}

const textInput = document.getElementById("text-input");

textInput.addEventListener("input", function () {
  const memeTextImage = document.getElementById("meme-text");
  memeTextImage.innerHTML = textInput.value
});

const buttonChoice = document.getElementById("meme-insert");

buttonChoice.addEventListener("change", function(event) {
  loadFile(event);
});

const btFire = document.getElementById('fire');

btFire.addEventListener('click', function (){
   document.getElementById('meme-image-container').className = 'container box-fire';
})

const btWater= document.getElementById('water');

btWater.addEventListener('click', function(b){
  document.getElementById('meme-image-container').className = 'container box-water';
})

const btEarth = document.getElementById('earth');

btEarth.addEventListener('click', function(){
  document.getElementById('meme-image-container').className = 'container box-earth';
})
