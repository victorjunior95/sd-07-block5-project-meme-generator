const script = document.querySelector('#text-input');
let setImage = document.querySelector('#meme-insert');
const picture = document.querySelector('#meme-image');



//Recupera o local onde quero minha string
script.addEventListener('keyup', function () {
    document.querySelector('#meme-text').innerText = script.value;
});

setImage.addEventListener('change', function(event){
    setImage = setImage.value;
    picture.src = URL.createObjectURL(event.target.files[0]);
});