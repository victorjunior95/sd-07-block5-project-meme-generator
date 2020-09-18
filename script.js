function insertTextOnImage(event) {
  console.log("entre insertTexOnImage")

  const text = event.target.value;
  const memeTextP = document.querySelector("#meme-text")
  memeTextP.innerText = text;

}



function addBorderStyle(event) {
  console.log("entre addborderStyle")

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
  console.log("entre insertImage")

  const memeImageImg = document.querySelector("#meme-image");
  memeImageImg.src = window.URL.createObjectURL(event.target.files[0])
  memeImageImg.onload = () => {
    URL.revokeObjectURL(memeImageImg.src) // free memory
  }
}

function insertDefaultImage(event) {
  const memeImageImg = document.querySelector("#meme-image")
  const idImageCase = event.target.id;
  switch (idImageCase) {
    case "meme-1":
      memeImageImg.src = "/imgs/meme1.png"
      break;
    case "meme-2":
      memeImageImg.src = "/imgs/meme2.png"

      break;
    case "meme-3":
      memeImageImg.src = "/imgs/meme3.png"

      break;
    case "meme-4":
      memeImageImg.src = "/imgs/meme4.png"

      break;

  }
}

function handleControllerEvents(...types) {

  for (const type of types) {
    switch (type) {
      case "click":
        allEventsOnClicks(type)
        break;

      case "input":
        allEventOnInput(type);
        break;

      case "change":
        allEventOnChange(type);
        break;

      default:
        break;
    }
  }

}

function allEventsOnClicks(type) {

  document.addEventListener(type, (event) => {
    const switchEvent = event.target.dataset.event;
    switch (switchEvent) {

      case "addBorderButton":
        addBorderStyle(event);
        break;

      case "addDefaultImage":
        insertDefaultImage(event);
        break;
    }
  })
}

function allEventOnInput(type) {

  document.addEventListener(type, (event) => {
    const switchEvent = event.target.dataset.event;
    switch (switchEvent) {

      case "insertTextInput":
        insertTextOnImage(event);
        break;
    }
  })

}

function allEventOnChange(type) {

  document.addEventListener(type, (event) => {
    const switchEvent = event.target.dataset.event;
    switch (switchEvent) {

      case "insertMemeInput":
        insertImage(event);
        break;

    }
  })

}

window.onload = () => {

  handleControllerEvents("click", "input", "change")
}
