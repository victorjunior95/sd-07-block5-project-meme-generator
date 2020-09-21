let textoDigitado = document.getElementById("text-input");

textoDigitado.addEventListener("input", function(event) {
    let textoMeme = document.getElementById("meme-text");
    let texto = event.target.value;
    textoMeme.innerText = texto;
});

let  imagemInserida = document.getElementById("meme-insert");

function carregarImagem(event) {
    let imagemCarregada = document.getElementById("meme-image");
    imagemCarregada.src = URL.createObjectURL(event.target.files[0]);
}

imagemInserida.addEventListener("change", function(event) {
    carregarImagem(event)
 });

 let bordaFire = document.getElementById("fire");

 bordaFire.addEventListener("click", function() {
     let quadro = document.getElementById("meme-image-container");
     quadro.style.border = "3px dashed red"
 })

 let bordaWater = document.getElementById("water");

 bordaWater.addEventListener("click", function() {
    let quadro = document.getElementById("meme-image-container");
    quadro.style.border = "5px double blue"
 })

 let bordaEarth = document.getElementById("earth");

 bordaEarth.addEventListener("click", function() {
    let quadro = document.getElementById("meme-image-container");
    quadro.style.border = "6px groove green"
 })

 let meme1 = document.getElementById("meme-1");

 meme1.addEventListener("click", function() {
    let imagemCarregada = document.getElementById("meme-image");
    imagemCarregada.src = "imgs/meme1.png"
 })

 let meme2 = document.getElementById("meme-2");

 meme2.addEventListener("click", function() {
    let imagemCarregada = document.getElementById("meme-image");
    imagemCarregada.src = "imgs/meme2.png"
 })

 let meme3 = document.getElementById("meme-3");

 meme3.addEventListener("click", function() {
    let imagemCarregada = document.getElementById("meme-image");
    imagemCarregada.src = "imgs/meme3.png"
 })

 let meme4 = document.getElementById("meme-4");

 meme4.addEventListener("click", function() {
    let imagemCarregada = document.getElementById("meme-image");
    imagemCarregada.src = "imgs/meme4.png"
 })