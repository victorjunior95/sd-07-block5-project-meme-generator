window.onload = function () {
    //seleciona o id text-input
    let textInput = document.querySelector("#text-input");
    //seleciona o id meme-insert
    let memeInsert = document.querySelector("#meme-insert")
    //seleciona a div com classe container
    let container = document.querySelector('.container');

    // cria o elemento span
    let memeText = document.createElement("span");
    // Criar o elemento img
    let memeImage = document.createElement("img");
    
    //função que adiciona um evento listener ao textInput
    textInput.addEventListener('keyup', setText);
    function setText () {    
        memeText.innerText = textInput.value     
    }
    //função que adiciona um evento listener ao imageInput
    memeInsert.addEventListener("change", setImage);
    function setImage () {
        memeImage.src = URL.createObjectURL(this.files[0])
    }    
    
    //Atribui a id meme-text a memeText
    memeText.id = 'meme-text';
    //Atribui a id meme-image a memeImage
    memeImage.id = "meme-image";

    //Inserir memeText como filho de container
    container.appendChild(memeText);
    //Inserir memeImage como filho de container
    container.appendChild(memeImage)



}

