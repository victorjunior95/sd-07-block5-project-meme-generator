window.onload = function () {;
textMeme();
}

function textMeme() {
  let textInput = document.getElementById('text-input');
  textInput.addEventListener('input', function (event) {
    // recuperar o valor digitado
    let text = event.target.value;
    // recuperar onde vou colocar o texto
    let memeText = document.getElementById('meme-text');
    // colocar o texto no lugar
    memeText.innerText = text;
  });
}

let foto = function (event) {
  let memeInsert = document.getElementById('meme-image');
  memeInsert.src = URL.createObjetctURL(event.target.files[0]);
  memeInsert.onload = function () {
    URL.revokeObjectURL(memeInsert.src);
  };
};

let memeImage = document.getElementById('meme-image');
memeImage.addEventListener('change', foto);

