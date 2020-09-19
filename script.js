// let text_input = document.getElementById('text-input');
// let text = document.getElementById('meme-text');
let insere_imagem = document.getElementById('meme-insert');
let container = document.getElementById('meme-image-container');
let botao_earth = document.getElementById('earth');
let botao_fire = document.getElementById('fire');
let imagem = document.getElementById('meme-image');
let botao_water = document.getElementById('water');

insere_imagem.addEventListener('change', function() {
    insere_imagem = insere_imagem.value;
    imagem.src = URL.createObjectURL (event.target.files[0]);
})
botao_earth.addEventListener('click', function(){
    container.style.border = '6px groove rgb(0, 128, 0)';
});

botão_fire.addEventListener('click', function(){
    container.style.border = '3px dashed rgb(255, 0, 0)';
});

botao_water.addEventListener('click', function(){
    container.style.border = '5px double rgb(0, 0, 255)';
});

text_input.addEventListener('keyup', carrega_texto())
function carrega_texto()
{
    let x = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerHTML = x;
}