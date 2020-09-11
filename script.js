let textOutput = document.querySelector("#meme-text");
document.querySelector("#text-input").addEventListener("change", (event) => {
  textOutput.innerHTML = event.target.value;
  console.log(textOutput.innerHTML);
});

document.querySelector("#meme-insert").addEventListener("change", (event) => {
  var image = document.querySelector("#meme-image");
  image.src = URL.createObjectURL(event.target.files[0]);
});
