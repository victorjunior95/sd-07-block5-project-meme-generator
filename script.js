window.onload = function () {
  let textInput = document.querySelector("#text-input");
  let memeText = document.querySelector("#meme-text");
  let memeInsert = document.querySelector("#meme-insert");
  let memeImage = document.querySelector("#meme-image");
  function changeText() {
    memeText.innerText = `${textInput.value}`;
  }
  // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  function changeImage() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    memeImage.onload = function () {
      URL.revokeObjectURL(memeImage.src); // free memory
    };
  }
  textInput.addEventListener("input", changeText);
  memeInsert.addEventListener("change",changeImage);
};
