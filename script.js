window.onload = function(){
    //Declarando variáveis:
    let textMemeInput = document.getElementById("text-input");
    let inputImg = document.getElementById("meme-insert");
    

    //Criando evento do texto
    textMemeInput.addEventListener("keyup", function(){
        let memeText = document.getElementById("meme-text");
        memeText.innerText = textMemeInput.value;
    });
    //Criando evento da imagem
    inputImg.addEventListener("change", function(event){
        let imgMeme = document.getElementById("meme-image");
        imgMeme.src = URL.createObjectURL(event.target.files[0]);
    })















}