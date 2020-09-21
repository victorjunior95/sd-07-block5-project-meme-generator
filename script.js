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


let imageMeme = function (event) {
  let memeInsert = document.getElementById('meme-insert');
  memeInsert.src = URL.createObjetctURL(event.target.files[0]);
  memeInsert.onload = function () {
    URL.revokeObjectURL(memeInsert.src);
  };
};

let meme = document.getElementById('image');
meme.addEventListener('change', imageMeme);

