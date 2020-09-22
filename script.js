
function showImage(event) {
    document.querySelector('#meme-image').src = URL.createObjectURL(event.target.files[0]);
}

function vermelho() {
    document.getElementById('meme-image-container').style.border = '3px dashed red';
}

function azul() {
    document.getElementById('meme-image-container').style.border = '5px double blue';
}

function verde() {
    document.getElementById('meme-image-container').style.border = '6px groove green';
}

function vermelho() {
    document.getElementById('meme-image-container').style.border='3px dashed red';
}

document.getElementById('fire').addEventListener('click', function(){
    document.getElementById('meme-image-container').style.border='3px dashed red';
});

document.getElementById('text-input').addEventListener("keyup", function(){
    document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
});



// let memeAqui = document.querySelector('.meme')

// memeAqui.addEventListener('click', memePronto);
// function memePronto() {
//     let selecao = document.querySelector('.selecionado');
//     if (selecao !== null) {
//         selecao.classList.remove('selecionado');
//     }
//     event.target.classList.add('selecionado');
// }