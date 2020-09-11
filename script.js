
window.onload = function() {
    let caixaTexto = document.querySelector('#text-input');
            
    caixaTexto.addEventListener('input', function(){
        console.log(caixaTexto)
        let saidaTexto = document.querySelector('#meme-text');
        saidaTexto.innerHTML = caixaTexto.value;
    });

 
}