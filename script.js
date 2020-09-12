window.onload = function(){
    //Declarando variáveis:
    let textMemeInput = document.getElementById("text-input");
    let inputImg = document.getElementById("meme-insert");
    let btnFire = document.getElementById("fire");
    let btnWater = document.getElementById("water");
    let btnEarth = document.getElementById("earth");
    

    //Criando evento do texto
    textMemeInput.addEventListener("keyup", function(){
        let memeText = document.getElementById("meme-text");
        memeText.innerText = textMemeInput.value;
    });
    //Criando evento da imagem com a função URL.createObjectURL
    inputImg.addEventListener("change", function(event){
        let imgMeme = document.getElementById("meme-image");
        imgMeme.src = URL.createObjectURL(event.target.files[0]);
    });
    //Criando as bordas bônus com evento de click
    btnFire.addEventListener("click", function(){
        let border = document.getElementById("meme-image-container");
        border.style.border = "dashed red 3px"
    });
    btnWater.addEventListener("click", function(){
        let border = document.getElementById("meme-image-container");
        border.style.border = "double blue 5px"
    });
    btnEarth.addEventListener("click", function(){
        let border = document.getElementById("meme-image-container");
        border.style.border = "groove green 6px"
    });














}