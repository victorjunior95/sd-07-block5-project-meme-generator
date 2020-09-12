let textInput = document.querySelector('#text-input');
let buttons = document.querySelectorAll('button');
let imageClick = document.querySelector('.pre-memes').querySelectorAll('img');
let output = document.querySelector('#meme-image');

textInput.addEventListener('keyup', () => {
  let newOutput = document.querySelector('#meme-text');

  newOutput.innerText = textInput.value;
});

function loadFile(e) {
  output.src = URL.createObjectURL(e.target.files[0]);
  output.onload = () => {
    URL.revokeObjectURL(output.src);
  };
}

for (let i = 0; i < buttons.length; i += 1) {
  let imgBorder = document.querySelector('.container');

  buttons[i].addEventListener('click', () => {
    if (i === 0) {
      imgBorder.style.border = 'red dashed 3px';
    } else if (i === 1) {
      imgBorder.style.border = 'blue double 5px';
    } else if (i === 2) {
      imgBorder.style.border = 'green groove 6px';
    }
  });
}

for (let i = 0; i < imageClick.length; i += 1) {
  imageClick[i].addEventListener('click', () => {
    if (i === 0) {
      output.src = './imgs/meme1.png';
    } else if (i === 1) {
      output.src = './imgs/meme2.png';
    } else if (i === 2) {
      output.src = './imgs/meme3.png';
    } else if (i === 3) {
      output.src = './imgs/meme4.png';
    }
  });
}
