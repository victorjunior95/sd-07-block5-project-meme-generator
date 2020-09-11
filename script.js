// Function that load the Photo from input file to Meme
function loadPhoto(event) {
  // Get divMeme to apply photo
  let divMemeImage = document.getElementById('meme-image');
  // Apply photo
  divMemeImage.src = URL.createObjectURL(event.target.files[0]);
  // Add function on onload to free memory
  divMemeImage.onload = function() {
    URL.revokeObjectURL(divMemeImage.src) // free memory
  }
};

// Function that load the MEME from mini memes to Meme
function loadMeme(event) {
  // Get divMeme to apply mini meme
  let divMemeImage = document.getElementById('meme-image');
  // Apply the same src from the elemet that throws the event
  divMemeImage.src = event.target.src;
};


// Function that apply text on meme
function applyText() {
  // get input text
  let textInput = document.getElementById('text-input').value;
  console.log('textMeme');
  // put text on meme
  let memeText = document.getElementById('meme-text');
  memeText.innerText = textInput;
};

// Function that apply border on meme-image-container
function applyBorder(event) {
  let borderClassName = 'meme-image-container default-border';
  // define the class
  switch(event.target) {
    case fire:
      borderClassName = 'meme-image-container fire-border';
      break;
    case water:
      borderClassName = 'meme-image-container water-border';
      break;
    case earth:
      borderClassName = 'meme-image-container earth-border';
      break;
  }
    // apply the class
  document.getElementById('meme-image-container').className = borderClassName;
};

// Get Element meme-insert and assign the event loadPhoto
document.getElementById('meme-insert').addEventListener('change',loadPhoto);

// Get Element meme-input and assign the event applyText
document.getElementById('text-input').addEventListener('input',applyText);

// Get All buttons and assign the event applyBorder
let buttonElements = document.getElementsByTagName('button');
for (let index = 0; index < buttonElements.length; index += 1) {
  buttonElements[index].addEventListener('click',applyBorder);
};

// Get All Images (mini memes) and assign the event loadMeme
let imgElements = document.getElementsByClassName('meme-sample');
for (let index = 0; index < imgElements.length; index += 1) {
  imgElements[index].addEventListener('click',loadMeme);
};