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
  //fim funcao Adicionar texto a imagem

  //adicionando bordas


  let backgroundColorButtons = document.querySelectorAll("#cores>button")
  for (let i = 0; i < backgroundColorButtons.length; i += 1) {
    backgroundColorButtons[i].addEventListener("click", function(event) {
      setBackgroundColor(event.target.innerHTML)
    })
  }

  function setBackgroundColor(color) {

      let container = document.getElementById('meme-image-container');

      let caixaAlta = color.toUpperCase();

      if(caixaAlta == 'FIRE') {

          container.style.borderColor = "rgb(255, 0, 0)";
          container.style.borderWidth = '3px';
          container.style.borderStyle = 'dashed';
      }
      else if (caixaAlta == 'WATER') {
          container.style.borderColor = "rgb(0, 0, 255)";
          container.style.borderWidth = '5px';
          container.style.borderStyle = 'double';

      }
      else if(caixaAlta == 'EARTH') {
          container.style.borderColor = "rgb(0, 128, 0)";
          container.style.borderWidth = '6px';
          container.style.borderStyle = 'groove';

      }
    }

    //imagens pré-carregadas
      document.getElementById("meme-01").src = "imgs/meme1.jpg";
      document.getElementById("meme-02").src = "imgs/meme2.jpg";
      document.getElementById("meme-03").src = "imgs/meme3.jpg";
      document.getElementById("meme-04").src = "imgs/meme4.jpg";

      let imgsClick = document.querySelectorAll("#memePronto>img");

      for (let i = 0; i < imgsClick.length; i += 1) {

          imgsClick[i].addEventListener("click", function(event) {
              inserirImg(event.target.src)
          })

       }


       function inserirImg(eventSrc) {

          let memeImage = document.getElementById("meme-image");
          memeImage.src = eventSrc;
     }


}
