//Declarando elemento img que contém a imagem do meme para manipular
let imageInsert = document.getElementById('meme-image');

//Inserindo imagem por seleção de arquivo no dispositivo
let memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', function(event){
    imageInsert.src = URL.createObjectURL(event.target.files[0]);
    imageInsert.onload = function() {
        URL.revokeObjectURL(imageInsert.src);
    }
})

//Selecionando a miniatura 1 para implementar evento
let miniatura1 = document.querySelector('#meme-1')
miniatura1.addEventListener('click', function(event){
    imageInsert.src = event.target.src;
})

//Selecionando a miniatura 2 para implementar evento
let miniatura2 = document.querySelector('#meme-2')
miniatura2.addEventListener('click', function(event){
    imageInsert.src = event.target.src;
})

//Selecionando a miniatura 3 para implementar evento
let miniatura3 = document.querySelector('#meme-3')
miniatura3.addEventListener('click', function(event){
    imageInsert.src = event.target.src;
})

//Selecionando a miniatura 4 para implementar evento
let miniatura4 = document.querySelector('#meme-4')
miniatura4.addEventListener('click', function(event){
    imageInsert.src = event.target.src;
})

//Inserindo texto no meme
let textInput = document.querySelector('#text-input');
textInput.addEventListener('input', function() {
    if (textInput.value.length <= 60) {
        let memeText = document.querySelector('#meme-text').innerText = textInput.value; 
    } else {
        console.log("Você ultrapassou o limite de caracteres");
    } 
})

//Selecionando a DIV que será estilizada pelos botões
let divMeme = document.querySelector('#meme-image-container');

//Implementando a função do botão fire
let fire = document.querySelector('#fire');
fire.addEventListener('click', function(){
    divMeme.className = "fire";
})

//Implementando a função do botão water
let water = document.querySelector('#water');
water.addEventListener('click', function(){
    divMeme.className = "water";
})

//IMplementando a função do botão Earth
let earth = document.querySelector('#earth');
earth.addEventListener('click', function(){
    divMeme.className = "earth";
})
