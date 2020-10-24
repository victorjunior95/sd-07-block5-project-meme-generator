const textImput = document.getElementById('text-input');
const memeText = document.createElement("p");
const container = document.querySelector(".container");
textImput.addEventListener("keyup", function(){
  memeText.innerText = textImput.value;
  memeText.className = 'meme-text';
  memeText.id = 'meme-text';
  container.appendChild(memeText);
});
