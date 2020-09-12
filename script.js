let imageMeme = document.getElementById("meme-image");

document.getElementById("text-input").addEventListener("keyup", function () {
  let text = document.getElementById("text-input").value;
  document.getElementById("meme-text").innerText = text;
});

document
  .getElementById("meme-insert")
  .addEventListener("change", function (meme) {
    imageMeme.src = URL.createObjectURL(meme.target.files[0]);
  });
