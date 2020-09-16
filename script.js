window.onload = function () {

  addBorderStyle();
  setupMemeTextInput();


}

function setupMemeTextInput() {
  let inputText = document.querySelector("#text-input");
  inputText.addEventListener("click", function (event) {
    console.log("voce me clickou ")
    event.target.addEventListener("input", function () {

      let text = event.target.value;
      let memeTextP = document.querySelector("#meme-text")
      memeTextP.innerText = text;
    })
    event.target.addEventListener("dblclick", function () {
      console.log("duas vezes")
    })
  })
}



// let buttonFire = document.querySelector("#fire")
//   buttonFire.addEventListener("click", function () {
//   memeImageContainer.style.border = "3px dashed red"
// })

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
