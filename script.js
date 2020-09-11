function insereTexto() {
    const textMeme = document.querySelector('#meme-text');
  textMeme.innerText = text.value;
}

let text = document.querySelector('#text-input');
text.addEventListener('input', insereTexto);

function insereImagem(event) {
    
    let imageMeme = document.querySelector('#meme-image');
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
}

let memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', insereImagem);

