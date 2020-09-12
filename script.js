window.onload = function () {
  // MY CONSTANTS
  const containerMeme = document.querySelector("#meme-image-container");
  const img = document.querySelector("#meme-image");
  const loadImg = document.querySelector("#meme-insert");
  const textInput = document.querySelector("#text-input");
  const loadText = document.querySelector("#meme-text");

  // CONDITION TO CHANGE THE DISPLAY CONTAINER CSS
  let imgShow = false;
  if (imgShow === false) {
    containerMeme.style.display = "none";
  }

  // EVENT TO SELECT A IMAGE IN MY CONTAINER
  loadImg.addEventListener("change", selectImg);

  function selectImg(event) {
    img.src = URL.createObjectURL(event.target.files[0]);
    imgShow = true;
    if (imgShow === true) {
      containerMeme.style.display = "block";
    }
  }

  // EVENT TO ADD TEXT IN MY CONTAINER
  textInput.addEventListener("keyup",addText);

  function addText () {
    loadText.innerText = textInput.value;
  }
};
