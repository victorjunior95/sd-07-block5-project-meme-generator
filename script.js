window.onload = function() {

}

function textMeme() {
  let textInput = document.getElementById('text-input');
  textInput.addEventListener('input', function(event) {
  let text = event.target.value;
  let memeText = document.getElementById('meme-text');
  memeText.innerText = text;  
  });
}

let imageMeme = function (event) {
    let memeInsert = document.getElementById('meme-insert');
   memeInsert.src = URL.createObjetctURL(event.target.files[0]);
   memeInsert.onload = function () {
      URL.revokeObjectURL (memeInsert.src);
    };
  }
 
  let memeImage = document.getElementById('image');
  memeImage.addEventListener('change', imageMeme);