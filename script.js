window.onload = function(){
    //Declarando variáveis:
    let textMemeInput = document.getElementById("text-input");
    

    //Criando evento
    textMemeInput.addEventListener("keyup", function(){
        let memeText = document.getElementById("meme-text");
        memeText.innerText = textMemeInput.value;
    });















}