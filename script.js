let inputText = document.querySelector('#text-input');
let inputImage = document.querySelector('#meme-insert');
let containerBorder = document.querySelector('#meme-image-container');
let image = document.querySelector('#meme-image');

inputText.addEventListener('keyup', function(){
  document.querySelector('#meme-text').innerText = inputText.value;
});



document.querySelector('#meme-1').addEventListener("click", function(){
  image.src = './imgs/meme-1.png';
});

document.querySelector('#meme-2').addEventListener("click", function(){
  image.src = './imgs/meme-2.png';
})

document.querySelector('#meme-3').addEventListener("click", function(){
  image.src = './imgs/meme-3.png';
});

document.querySelector('#meme-4').addEventListener('click', function(){
  image.src = './imgs/meme-4.png';
});

inputImage.addEventListener('change', function (event){
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function() {
    URL.revokeObjectURL(image.src);
  }
});

document.querySelector('#fire').addEventListener("click", function(){
  containerBorder.style.border = 'dashed 3px red'; 
})

document.querySelector('#water').addEventListener("click", function(){
  containerBorder.style.border = 'double 5px rgb(0 0 225)';
})

document.querySelector('#earth').addEventListener("click", function(){
  containerBorder.style.border = 'groove 6px rgb(0 128 0)';
})

