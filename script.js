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

    let backgroundColorButtons = document.querySelectorAll("#cores>button")
    for (let i = 0; i < backgroundColorButtons.length; i += 1) {
      backgroundColorButtons[i].addEventListener("click", function(event) {
        setBackgroundColor(event.target.innerHTML)
      })
    }

    function setBackgroundColor(color) {
        let container = document.getElementById('meme-image-container');

        if(color == 'red') {
        container.style.borderColor = "rgb(255, 0, 0)";
        container.style.borderWidth = '3px';
        container.style.borderStyle = 'dashed';
        }
        else if (color == 'blue') {
            container.style.borderColor = "rgb(0, 0, 255)";
            container.style.borderWidth = '5px';
            container.style.borderStyle = 'double';

        }
        else if(color == 'green') {
            container.style.borderColor = "rgb(0, 128, 0)";
            container.style.borderWidth = '6px';
            container.style.borderStyle = 'groove';

        }
      }
}

