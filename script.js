document.querySelector('#text-input').addEventListener("keyup", function() {
  let text = document.querySelector('#text-input').value;
  document.querySelector('#meme-text').innerText = text;
});
