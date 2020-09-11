
function getText() {
  let textInput = document.getElementById('text-input').value;
  let memeText = document.getElementById('meme-text');
  memeText.innerText=textInput;
}

let userText = document.getElementById('text-input');
userText.addEventListener('keyup', getText);

function getImage(event) {
  let memeInsert = document.getElementById('meme-insert');
  memeInsert.src = URL.createObjectURL(event.target.files[0]);
  let reader = new FileReader();
  reader.onload = function (e) {
   memeInsert.src = e.target.result;
    // URL.revokeObjectURL(memeInsert.src);
  };
  reader.readAsDataURL(e.target.files[0]);
}

let memeInsert = document.getElementById('image-insert');
memeInsert.addEventListener('change', getImage);
