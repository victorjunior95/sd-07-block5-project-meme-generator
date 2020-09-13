window.onload = function() {
    /* Onde eu pego a informação e onde eu jogo a informação*/
    let textToBeInserted = document.querySelector("#text-input"); /* Pega elemento HTML pela seleção de seu Id */
    let textToBeShown = document.querySelector("#meme-text"); /* Local onde o texto deverá aparecer */
    textToBeInserted.addEventListener("keyup", insertText); /* Atribuindo um evento para quando houver um input na caixa de texto */
 
    function insertText() { /* Criando função onde o usuário vai inserir a informação na caixa de texto */
        textToBeShown.innerText = textToBeInserted.value; /* O que o usuário escrever entrará como valor innerText dentro do innerHTML do meme-text */
    }

    /* Como colocar a imagem na div */
    let imageSrc = document.querySelector("#meme-insert"); /* Pega HTML pelo Id onde imagem será escolhida */
    let imageBox = document.querySelector("#meme-image"); /* Local que apresentará a imagem */

    function insertImage() { /*  */
        imageBox.src = window.URL.createObjectURL(imageSrc.files[0]); /* Buscando a fonte da seleção da imagem */
    }
    
    imageSrc.addEventListener("change", insertImage); /*  */
    }