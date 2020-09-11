let textOutput = document.querySelector("#meme-text");
document.querySelector("#text-input").addEventListener("change", (event) => {
  textOutput.innerHTML = event.target.value;
  console.log(textOutput.innerHTML);
});
