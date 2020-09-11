window.onload = function(){

    //adicionando imagem
    let input = document.getElementById('meme-insert');

    function fileLoad(event) {
      let memeImage = document.getElementById("meme-image");
      memeImage.src = URL.createObjectURL(event.target.files[0]);
      memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src) // free memory
      }
    }

    input.addEventListener('change',fileLoad);
    //fim

    //adicionado texto
    let textMeme = document.getElementById('text-input');

    //funcao para trocar texto
    function AdicionaTextoImg(){
        let texto = document.getElementById('meme-text');
        texto.textContent = textMeme.value;
    }
    textMeme.addEventListener('input', AdicionaTextoImg);
}

