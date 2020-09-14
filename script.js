
  function carregarTexto() {
    const textInput = document.getElementById("text-input").value;
    const memeText = document.getElementById("meme-text");
    memeText.innerText = textInput;
  }

  function carregarImagemPc(event) {
    const loadImg = document.getElementById("meme-image");
    loadImg.src = URL.createObjectURL(event.target.files[0]);
    loadImg.onload = function () {
      URL.revokeObjectURL(loadImg.src);
    };
  }

  function CarregaMeme(event) {
    const loadImg = document.getElementById("meme-image");
    loadImg.src = event.target.src;
  }
  document
    .getElementById('meme-insert')
    .addEventListener('input',carregarImagemPc);
    document.getElementById('meme-insert').addEventListener('change', carregarImagemPc);

  document
    .getElementById('text-input')
    .addEventListener('input', carregarTexto);



  function editarBorda(event) {
    let mudaBorda = "";
    switch (event.target.id) {
      case "fire":
        mudaBorda = "meme-image-container fire-border";
        break;
      case "water":
        mudaBorda = "meme-image-container water-border";
        break;
      case "earth":
        mudaBorda = "meme-image-container earth-border";
      default:
        mudaBorda = "meme-image-container default-border";
    }

    document.getElementById("meme-image-container").className = mudaBorda;
  }

  //falta fazer a busca buscar

  const buttonElementos = document.getElementById('button');
  for (let index = 0; index < buttonElementos.length; index+=1) {
    buttonElementos[index].addEventListener('click',editarBorda);
  }

  const MemeEx = document.getElementsByClassName('memep');
  for (let index = 0; index < MemeEx.length; index+=1) {
    MemeEx[index].addEventListener('click',CarregaMeme);
    
  }
 

