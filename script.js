let textInput = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");

textInput.addEventListener("input", function () {
  memeText.innerHTML = textInput.value;
});

//---------------------------------------------------------------------------

let memeInsert = document.querySelector("#meme-insert");
let memeImage = document.querySelector("#meme-image");

memeInsert.addEventListener("change", function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});

//----------------------------------------------------------------------------

//let memeConteiner = document.querySelector("#meme-image-container");

//let buttonFire = document.querySelector("#fire");

//buttonFire.addEventListener("click", function () {
//  memeConteiner.style.border = "3px dashed red";
//});

//let buttonWater = document.querySelector("#water");

//buttonWater.addEventListener("click", function () {
//  memeConteiner.style.border = "5px double blue";
//});

//let buttonEarth = document.querySelector("#earth");

//buttonEarth.addEventListener("click", function () {
//  memeConteiner.style.border = "6px groove green";
//});

//-----------------------------------------------------------------------------

//let memeOne = document.querySelector("#meme-1");

//memeOne.addEventListener("click",function(){
//    memeImage.src = memeOne.src;
//})

//let memeTwo = document.querySelector("#meme-2");

//memeTwo.addEventListener("click",function(){
//    memeImage.src = memeTwo.src;
//})

//let memeThree = document.querySelector("#meme-3");

//memeThree.addEventListener("click",function(){
//    memeImage.src = memeThree.src;
//})

//let memeFour = document.querySelector("#meme-4");

//memeFour.addEventListener("click",function(){
//    memeImage.src = memeFour.src;
//})