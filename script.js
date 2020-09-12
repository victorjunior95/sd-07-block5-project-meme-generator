window.onload = function () {
  // MY CONSTANTS
  const containerMeme = document.querySelector("#meme-image-container");
  const img = document.querySelector("#meme-image");
  const loadImg = document.querySelector("#meme-insert");
  const textInput = document.querySelector("#text-input");
  const loadText = document.querySelector("#meme-text");
  const buttonRed = document.querySelector("#fire");
  const buttonBlue = document.querySelector("#water");
  const buttonBrown = document.querySelector("#earth");

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
  textInput.addEventListener("keyup", addText);

  function addText() {
    loadText.innerText = textInput.value;
  }

  // EVENT IN THE BUTTONS BORDERS
  buttonRed.addEventListener("click", changeBorderFire);

  function changeBorderFire() {
    containerMeme.style.border = "3px dashed red";
  }

  buttonBlue.addEventListener("click", changeBorderWater);

  function changeBorderWater() {
    containerMeme.style.border = "5px double blue";
  }

  buttonBrown.addEventListener("click", changeBorderEarh);

  function changeBorderEarh() {
    containerMeme.style.border = "6px groove green";
  }

  const preImgs = document.querySelectorAll(".miniatureImg");
  for (let i = 0; i < preImgs.length; i += 1) {
    preImgs[i].addEventListener("click", currentImg);

    function currentImg() {
      img.src = preImgs[i].src;
      imgShow = true;
      if (imgShow === true) {
        containerMeme.style.display = "block";
      }
    }
  }
};
