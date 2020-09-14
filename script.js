let memeInsert = document.querySelector("#meme-insert");
let img = document.querySelector("img");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let container = document.getElementById("meme-image-container");
let imageContainer = document.querySelector('#meme-text');

// Uploading image
memeInsert.addEventListener("input", function() {
  img.id = "meme-img";
  img.src = URL.createObjectURL(this.files[0]);
  })

// Button 1 - border type
button1.addEventListener("click", function(){
  container.style.border = "3px dashed red";
})
// Button 2 - border type
button2.addEventListener("click", function(){
  container.style.border = "5px double blue";
})
// Button 3 - border type
button3.addEventListener("click", function(){
  container.style.border = "6px groove green";
})