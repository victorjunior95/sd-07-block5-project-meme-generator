window.onload = function() {
  let inputText = document.getElementById("text-input");
  let memeText = document.getElementById("meme-text");

  console.log(inputText.value);
  inputText.addEventListener("input", function() {
    memeText.innerHTML = inputText.value;
  });
}
