window.onload = function () {
  handleControllerEvents("click", "input", "change");
}

function handleControllerEvents(...types) {
  for (const type of types) {
    document.addEventListener(type, (event) => {

      switch (type) {

        case "click":
          addBorderStyle(event)
          break;

        case "input":
          insertTextOnImage(event)
          break;

        case "change":
          insertImage(event)
          break;

        default:
          break;
      }
    })
  }
}

function insertTextOnImage(event) {
  if (event.target.classList.contains("textInputForImage")) {
    const text = event.target.value;
    const memeTextP = document.querySelector("#meme-text")
    memeTextP.innerText = text;
  }
}

/* function handleControllerEvents(...types) {
  for (let type of types) {
    document.addEventListener(type, (event) => {
      if (type === "click") {
        if (event.target.classList.contains("button")) {
          addBorderStyle(event);
        }
      } else if (type === "input") {
        if (event.target.classList.contains("textInputForImage")) {
          setupMemeTextInput(event);
        }
      } else if (type === "change") {
        if (event.target.classList.contains("memeInsert")) {
          insertImage(event);
        }
      }
    })
  }
} */

function addBorderStyle(event) {

  const memeImageContainer = document.querySelector("#meme-image-container")

  if (event.target.id === "fire") {

    memeImageContainer.style.border = "3px dashed red"

  } else if (event.target.id === "water") {

    memeImageContainer.style.border = "5px double blue"

  } else if (event.target.id === "earth") {

    memeImageContainer.style.border = "6px groove green"
  }
}

function insertImage(event) {

  if (event.target.classList.contains("memeInsert")) {

    const memeImage = document.querySelector("#meme-image");
    memeImage.src = window.URL.createObjectURL(event.target.files[0])

    memeImage.onload = () => {
      URL.revokeObjectURL(memeImage.src) // free memory
    }
  }
}
