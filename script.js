function addImage (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
      URL.revokeObjectURL(output.src);
  };
}

function addText () {
  const text = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerText = text;
}

function changeBorderColor (event) {
  const memeBorder = document.getElementById('meme-image-container');
  if (event.target.value === 'red') {
    memeBorder.style.border = '3px dashed red';
  } else if (event.target.value === 'blue') {
    memeBorder.style.border = '5px double blue';
  } else {
    memeBorder.style.border = '6px groove green';
  }
}

function addImgProto (event) {
  const toInsertImg = document.getElementById('meme-image');
  toInsertImg.src = event.target.src;
}

const imgInsert = document.getElementById('meme-insert');
imgInsert.addEventListener('input', addImage);
const textInsert = document.getElementById('text-input');
textInsert.addEventListener('input', addText);
const buttons = document.getElementsByTagName('button');
for (let i = 0; i < 3; i += 1) {
  buttons[i].addEventListener('click', changeBorderColor);
}
const listOfImgsTags = document.getElementsByClassName('img-proto');
for (let i = 0; i < 4; i += 1) {
  listOfImgsTags[i].addEventListener('click', addImgProto);
}
