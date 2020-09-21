window.onload = function() {
textMeme();
}

function textMeme() {
  let textInput = document.getElementById('text-input');
  textInput.addEventListener('input', function(event) {
  let text = event.target.value;
  let memeText = document.getElementById('meme-text');
  memeText.innerText = text;  
  });
}
  


// let textInput = document.getElementById('text-input');
// memeText.addEventListener('keyup', textMeme);

// function imageMeme(event) {
//   let memeIsert = document.getElementById('meme-insert');
//   memeIsert.src = URL.createObjetctURL(event.target.files[0]);
//   memeInsert.onload = function () {
//     URL.revokeObjectURL(memeIsert.src);
//   };
// }

// let meme = document.getElementById('image');
// meme.addEventListener('change', imageMeme);
