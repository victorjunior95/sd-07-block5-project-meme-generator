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