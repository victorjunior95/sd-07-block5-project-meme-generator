let container = document.getElementById('meme-image-container');
let image = document.getElementById('meme-image');
let inputImage =document.getElementById('meme-insert');


function myFunction() {
  var x = document.getElementById("text-input").value;
  document.getElementById("meme-text").innerHTML = x;
}

inputImage.addEventListener('change', function() {
  inputImage = inputImage.value;
  image.src = URL.createObjectURL(event.target.files[0]);
})

let buttonFire = document.getElementById('fire');
let buttonWater = document.getElementById('water');
let buttonEarth = document.getElementById('earth');

buttonFire.addEventListener('click', function() {
  container.style.border = '3px dashed rgb(255, 0, 0)';

});

buttonWater.addEventListener('click', function() {
  container.style.border = '5px double rgb(0, 0, 255)';

});
buttonEarth.addEventListener('click', function() {
  container.style.border = '6px groove rgb(0, 128, 0)'

  });
