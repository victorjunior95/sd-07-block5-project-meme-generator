window.onload = function () {

  //addBorderStyle();

  handleEvent("click", "input", "change");



}

/* function setupMemeTextInput() {
  let inputText = document.querySelector("#text-input");
  inputText.addEventListener("input", function (event) {
    let text = event.target.value;
    let memeTextP = document.querySelector("#meme-text")
    memeTextP.innerText = text;
  })
} */

function setupMemeTextInput(event) {

  let text = event.target.value;
  let memeTextP = document.querySelector("#meme-text")
  memeTextP.innerText = text;
  console.log(event)

}


/* function addBorderStyle() {

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
} */

function handleEvent(...types) {
  for (let type of types) {
    document.addEventListener(type, (event) => {
      if (type === "click") {
        if (event.target.classList.contains("button")) {
          addBorderStyle(event);
        }
      } else if (type === "input") {
        if (event.target.classList.contains("textInput")) {
          setupMemeTextInput(event);
        }
      } else if (type === "change") {
        if (event.target.classList.contains("memeInsert")) {
          insertImage(event);
        }
      }

    })
  }

}

function addBorderStyle(event) {

  let memeImageContainer = document.querySelector("#meme-image-container")


  if (event.target.id === "fire") {

    memeImageContainer.style.border = "3px dashed red"
    console.log(memeImageContainer.style.border)

  } else if (event.target.id === "water") {

    memeImageContainer.style.border = "5px double blue"

  } else if (event.target.id === "earth") {

    memeImageContainer.style.border = "6px groove green"
  }

}

function insertImage(event) {
  let memeImage = document.querySelector("#meme-image");
  memeImage.src = window.URL.createObjectURL(event.target.files[0])

}
