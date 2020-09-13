let inputText = document.querySelector("#text-input");
let inputImage = document.querySelector("#meme-insert");
let containerBorder = document.querySelector("#meme-image-container");

inputText.addEventListener("keyup", function(){
  document.querySelector("#meme-text").innerText = inputText.value;
});

let image = document.querySelector("#meme-image");

document.querySelector("#meme-1").addEventListener("click", function(){
  image.src = "./imgs/meme-1.png";
});

document.querySelector("#meme-2").addEventListener("click", function(){
  image.src = "./imgs/meme-2.png";
})

document.querySelector("#meme-3").addEventListener("click", function(){
  image.src = "./imgs/meme-3.png";
});

document.querySelector("#meme-4").addEventListener("click", function(){
  image.src = "./imgs/meme-4.png";
});

inputImage.addEventListener('input', () => {
  image.src = URL.createObjectURL(inputImage.files[0]);
});

document.querySelector("#fire").addEventListener("click", function(){
  containerBorder.style.border = "dashed 3px red"; 
})

document.querySelector("#water").addEventListener("click", function(){
  containerBorder.style.border = "double 5px blue";
})

document.querySelector("#earth").addEventListener("click", function(){
  containerBorder.style.border = "groove 6px green";
})

