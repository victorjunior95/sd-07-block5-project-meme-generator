function loadFile(event) {
    let divImage = document.getElementById("meme-image-container");
    let source = URL.createObjectURL(event.target.files[0]);
    divImage.innerHTML = `<img  src='${source}'                            
                        </img>`;
}

function insertImage(src) {
    let divImage = document.getElementById("meme-image-container");
    divImage.innerHTML = `<img src='/imgs/${src}' >                             
                        </img>`;
}
window.onload = function() {
    let inputText = document.getElementById("text-input");
    let memeText = document.getElementById("meme-text");
    inputText.addEventListener("input", function() {
        memeText.innerHTML = inputText.value;
    });

    let buttonImage = document.getElementById("meme-insert");
    buttonImage.addEventListener("change", function(event) {
        loadFile(event);
    });
};
//consultei o pull requeste de Luciano Brechon - Turma 07 da Trybe para compreender melhor as funções.
// link do pull realizado por  Luciano: https://github.com/tryber/sd-07-block5-project-meme-generator/pulls/Berchon