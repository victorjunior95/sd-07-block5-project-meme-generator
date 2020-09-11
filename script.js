let memeText = document.getElementById('meme-text');

let inputText = document.getElementById('text-input');

function textonaCaixa(){
    memeText.innerHTML = inputText.value;
};

inputText.addEventListener('keyup',textonaCaixa);

let btnMeme1 = document.getElementById('meme-1');
let btnMeme2 = document.getElementById('meme-2');
let btnMeme3 = document.getElementById('meme-3');
let btnMeme4 = document.getElementById('meme-4');

let lugarImagem = document.getElementById('lugarImagem');

function trocaMemePronto1(){

}
