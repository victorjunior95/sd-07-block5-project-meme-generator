let textInput = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');
let memeImgContainer = document.querySelector('#meme-image-container');
let fireButton = document.querySelector('#fire')
let waterButton = document.querySelector('#water')
let earthButton = document.querySelector('#earth')
let memeImage = document.querySelector('#meme-image')
let memeOne = document.querySelector('#meme-1')
let memeTwo = document.querySelector('#meme-2')
let memeThree = document.querySelector('#meme-3')
let memeFour = document.querySelector('#meme-4')



function colocaTextoDoMeme () {
  memeText.innerText = textInput.value;
}
// function trocaTextoB () {
//   caixaDois.innerText = caixaTexto.value;
// }
//Crie seu event listener abaixo:
textInput.addEventListener("input", colocaTextoDoMeme);
textInput.addEventListener("paste", colocaTextoDoMeme);
// caixaTexto.addEventListener("change", trocaTextoB);
let openFile = function(event) {
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function(){
      let dataURL = reader.result;
      let output = document.querySelector('#meme-image');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };
function changeBorderFire(){
    memeImgContainer.style.border = '3px dashed red'
}
fireButton.addEventListener('click', changeBorderFire)

function changeBorderWater(){
    memeImgContainer.style.border = '5px double blue'
}
waterButton.addEventListener('click', changeBorderWater)

function changeBorderEarth(){
    memeImgContainer.style.border = '6px groove green'
}
earthButton.addEventListener('click', changeBorderEarth)

function memeOneSelected(){
  memeImage.src = 'https://1.bp.blogspot.com/-04osrm9MrTE/X1ptWvJCMqI/AAAAAAAACNY/Pyq2iGrGKiEq5tUJtShRqdtzQ75CugM6gCLcBGAsYHQ/s320/meme-1.jpg'
}
memeOne.addEventListener('click', memeOneSelected)

function memeTwoSelected(){
  memeImage.src = 'https://1.bp.blogspot.com/-KRnvAayPm9c/X1pv0JvwpAI/AAAAAAAACN0/HKTqNmYv2d4_HurAH43gkC9fdOO712AFACLcBGAsYHQ/s320/meme2.jpg'
}
memeTwo.addEventListener('click', memeTwoSelected)

function memeThreeSelected(){
  memeImage.src = 'https://1.bp.blogspot.com/-b7pwhrEYIV4/X1pwHFPk0OI/AAAAAAAACN8/yAUM4Ah96DEpShWCeshLVxMK0Le5ygA-ACLcBGAsYHQ/s320/meme-3.jpg'
}
memeThree.addEventListener('click', memeThreeSelected)

function memeFourSelected(){
  memeImage.src = 'https://1.bp.blogspot.com/-4j8UF14dfoI/X1pwa1fcQOI/AAAAAAAACOE/DIUE_Vwo5ZQ3ENnU_9QTBvGn21tBldrRQCLcBGAsYHQ/s0/meme-4.jpg'
}
memeFour.addEventListener('click', memeFourSelected)

