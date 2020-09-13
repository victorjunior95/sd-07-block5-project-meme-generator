document.querySelector('#text-input').setAttribute('maxlength', 60);

const textInputBox = document.querySelector('#text-input');

let LoadMemeImage = function (event) {
  let image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(event.target.files[0]);
};

textInputBox.addEventListener('keyup', function () {
  const textInput = document.querySelector("#text-input").value;
  const textMeme = document.querySelector("#meme-text");
  textMeme.innerText = textInput;
});

function frog() {
  document.getElementById("meme-image").src = '/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme1.png';
}

function lol() {
  document.getElementById("meme-image").src = '/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme2.png';
}

function homer() {
  document.getElementById("meme-image").src = '/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme3.png';
}

function omg() {
  document.getElementById("meme-image").src = '/projects/block-05/sd-07-block5-project-meme-generator/imgs/meme4.png';
}

function fire() {
  document.getElementById("meme-image-container").style.border = 'dashed 3px red';
}

function water() {
  document.getElementById("meme-image-container").style.border = 'double 5px blue';
}

function earth() {
  document.getElementById("meme-image-container").style.border = 'groove 6px green';
}
