const textImput = document.getElementById('text-input');
const memeText = document.createElement("p");
const container = document.querySelector(".container");

textImput.addEventListener("keyup", function () {
  memeText.innerText = textImput.value;
});

memeText.id = 'meme-text';
container.appendChild(memeText);

const memeInsert = document.querySelector("#meme-insert");
const img = document.createElement("img");
memeInsert.addEventListener("change", function () {
  img.src = URL.createObjectURL(this.files[0]);
  img.className = "meme-image";
  img.id = "meme-image";
  container.appendChild(img);
});
const fire = document.querySelector("#fire");
fire.addEventListener("click", function(){
  container.style.border = "3px dashed red";
  
});

const water = document.querySelector("#water");
water.addEventListener("click", function(){
  container.style.border = "5px double blue";
});

const earth =document.querySelector("#earth");
earth.addEventListener("click", function(){
  container.style.border = "6px groove green";
});


