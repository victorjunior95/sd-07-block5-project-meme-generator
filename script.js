
caixaTexto.addEventListener('input', aparecerTexto);
    function aparecerTexto() {
        document.getElementById("#meme-text").innerText = document.getElementById("#text-input").value;
    }


function aparecerImagem(event) {
    document.querySelector("#meme-image").src = URL.createObjectURL(event.target.files[0]);
}

let botaoVermelho = document.querySelector("#fire");
botaoVermelho.addEventListener("click", vermelho);
function vermelho() {
    document.getElementById("#meme-image-container").style.border = "3px dashed red";
}

let botaoAzul = document.querySelector("#water");
botaoAzul.addEventListener("click", azul);
function azul() {
    document.getElementById("#meme-image-container").style.border = "5px double blue";
}

let botaoVerde = document.querySelector("#earth");
botaoVerde.addEventListener("click", verde);
function verde() {
    document.getElementById("#meme-image-container").style.border = "6px groove green";
}

let memeAqui = document.querySelector(".meme")

memeAqui.addEventListener("click", memePronto);
function memePronto() {
    let selecao = document.querySelector(".selecionado");
    if (selecao !== null) {
        selecao.classList.remove("selecionado");
    }
    event.target.classList.add("selecionado");
}
