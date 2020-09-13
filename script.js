let inputText = document.querySelector("#text-input");
let inputImage = document.querySelector("#meme-insert");
let containerBorder = document.querySelector("#meme-image-container");

inputText.addEventListener("keyup", function(){
  document.querySelector("#meme-text").innerText = inputText.value;
});

let image = document.querySelector("#meme-image");

document.querySelector("#dwight").addEventListener("click", function(){
  image.src = "Dwight.jpg";
});

document.querySelector("#jim").addEventListener("click", function(){
  image.src = "Jim.jpg";
})

document.querySelector("#michael").addEventListener("click", function(){
  image.src = "Michael.jpg";
});

document.querySelector("#handshake").addEventListener("click", function(){
  image.src = "handshake.jpg";
});

inputImage.addEventListener('input', () => {
  image.src = URL.createObjectURL(inputImage.files[0]);
});

document.querySelector("#dotted-border").addEventListener("click", function(){
  containerBorder.style.border = "dotted"; 
})

document.querySelector("#dashed-border").addEventListener("click", function(){
  containerBorder.style.border = "dashed";
})

document.querySelector("#double-border").addEventListener("click", function(){
  containerBorder.style.border = "double";
})

