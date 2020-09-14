
  function carregarTexto() {
    const textInput = document.getElementById('text-input').value;
    const memeText = document.getElementById('meme-text');
    memeText.innerText = textInput;
  }
  //falta entender pq esta retornando como nulo 
  function carregarImagemPc(event) {
    console.log(event);
    const loadImg = document.getElementById('meme-image');
    loadImg.src = URL.createObjectURL(event.target.files[0]);
    console.log(event);
    loadImg.onload = function () {
      URL.revokeObjectURL(loadImg.src);
    };
  }

  function CarregaMeme(event) {
    const loadImg = document.getElementById('meme-image');
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
    let mudaBorda = '';
    switch (event.target.id) {
      case 'fire':
        mudaBorda = 'meme-image-container fire-border';
        break;
      case 'water':
        mudaBorda = 'meme-image-container water-border';
        break;
      case 'earth':
        mudaBorda = 'meme-image-container earth-border';
        break;
      default:
        mudaBorda = 'meme-image-container default-border';
    }

    document.getElementById('meme-image-container').className = mudaBorda;
  }



function meme1(){
  document.getElementById('meme-imagem').src="imgs/meme1.png";
}
function meme2(){
  document.getElementById('meme-imagem').src="imgs/meme2.png";
}
function meme3(){
  document.getElementById('meme-imagem').src="imgs/meme3.png";
}
function meme4(){
  document.getElementById('meme-imagem').src="imgs/meme4.png";
}

  const buttonElementos = document.getElementsByTagName('button');
  for (let index = 0; index < buttonElementos.length; index+=1) {
    buttonElementos[index].addEventListener('click',editarBorda);
  }


 


