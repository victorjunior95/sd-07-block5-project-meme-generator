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
