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
    textMeme.addEventListener('keyup', AdicionaTextoImg);
    //fim fuuncao Adicionar texto a imagem

    //adicionando bordas
    let elFire = document.getElementById('fire');
    let elWater = document.getElementById('water');
    let elEarth = document.getElementById('earth');


    function setBorderColorRed() {
      let container = document.getElementById('meme-image-container');
      let color = elFire.innerText;
      container.style.borderColor = color;

    }

    elFire.addEventListener('click', setBorderColorRed);

    function setBorderColorBlue() {
      let container = document.getElementById('meme-image-container');
      let color = elWater.innerText;
      container.style.borderColor = color;

    }

    elWater.addEventListener('click', setBorderColorBlue);

    function setBorderColorGreen() {
      let container = document.getElementById('meme-image-container');
      let color = elEarth.innerText;
      container.style.borderColor = color;

    }

    elEarth.addEventListener('click', setBorderColorGreen);
}

