let caixaTexto = document.querySelector("#text-input");
let saidaTexto = document.querySelector("#meme-text");
function insereTexto() {
  saidaTexto.innerText = caixaTexto.value;
}
caixaTexto.addEventListener("keyup", insereTexto);
