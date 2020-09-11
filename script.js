let inputText = document.getElementById("text-input");
inputText.addEventListener('input', function(){
let memeText = document.getElementById("meme-text");
memeText.innerHTML = inputText.value; 
}); 

let inputImg = document.getElementById('meme-insert')
let imgElement = document.getElementById('meme-image');

inputImg.addEventListener('change', function() {
  var url = URL.createObjectURL(inputImg.files[0]);
  imgElement.src = url;
});
