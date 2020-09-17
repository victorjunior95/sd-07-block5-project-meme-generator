window.onload = function () {

  addBorderStyle();
  setupMemeTextInput();


}

function setupMemeTextInput() {
  let inputText = document.querySelector("#text-input");
  inputText.addEventListener("input", function (event) {
    let text = event.target.value;
    let memeTextP = document.querySelector("#meme-text")
    memeTextP.innerText = text;
  })
}


function addBorderStyle() {

  let memeImageContainer = document.querySelector("#meme-image-container")

  document.addEventListener("click", (event) => {
    if (event.target.id === "fire") {

      memeImageContainer.style.border = "3px dashed red"

    } else if (event.target.id === "water") {

      memeImageContainer.style.border = "5px double blue"
    } else if (event.target.id === "earth") {

      memeImageContainer.style.border = "6px groove green"
    }
  })
}
