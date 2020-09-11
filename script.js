let memeText = document.getElementById('meme-text');

let inputText = document.getElementById('text-input');

function textonaCaixa(){
    memeText.innerHTML = inputText.value;
};

inputText.addEventListener('keyup',textonaCaixa);

