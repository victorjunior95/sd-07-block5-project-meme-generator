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

  const memeImage = document.querySelector("#meme-image");
  memeImage.src = window.URL.createObjectURL(event.target.files[0])
  memeImage.onload = () => {
    URL.revokeObjectURL(memeImage.src) // free memory
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
