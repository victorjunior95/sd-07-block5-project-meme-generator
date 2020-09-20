const textInsert = document.getElementById('text-input');
textInsert.addEventListener('input', function() {
  const text = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerText = text;
});

const buttons = document.getElementsByTagName('button');
for (let i = 0; i < 3; i += 1) {
  buttons[i].addEventListener('click', function(event) {
    const memeBorder = document.getElementById('meme-image-container');
    if (event.target.value === 'red') {
      memeBorder.style.border = '3px dashed red';
    } else if (event.target.value === 'blue') {
      memeBorder.style.border = '5px double blue';
    } else {
      memeBorder.style.border = '6px groove green';
    }
  });
}

const listOfImgsTags = document.getElementsByClassName('img-proto');
for (let i = 0; i < 4; i += 1) {
  listOfImgsTags[i].addEventListener('click', function(event) {
    const toInsertImg = document.getElementById('meme-image');
    toInsertImg.src = event.target.src;
  });
}

const imgInsert = document.getElementById('meme-insert');
const output = document.getElementById('meme-image');
imgInsert.addEventListener('change', function() {
  output.src = window.URL.createObjectURL(this.files[0]);
})

const fontSizeButton = document.getElementById('font-size');
fontSizeButton.addEventListener('input', function() {
  document.getElementById('meme-text').style.fontSize = `${fontSizeButton.value}px`;
})

const fontFamilyButton = document.getElementById('font-family');
fontFamilyButton.addEventListener('input', function() {
  document.getElementById('meme-text').style.fontFamily = `${fontFamilyButton.value}`;
})

const fontColorButton = document.getElementById('font-color');
fontColorButton.addEventListener('input', function() {
  document.getElementById('meme-text').style.color = `${fontColorButton.value}`
})
