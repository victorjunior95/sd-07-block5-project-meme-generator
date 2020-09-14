function textMeme() {
    let textImput = document.getElementById("text-input").value;
    let memeText = document.getElementById("meme-text");
    memeText.innerHTML = textImput;

    let memeText = document.getElementById("text-input");
    memeText.addEventListener("keyup", textMeme);

    function imageMeme(event) {
        let memeIsert= document.getElementById("meme-insert");
        memeIsert.src = URL.createObjetctURL(event.target.files[0]);
        memeInsert.onload = function () {
            URL.revokeObjectURL(memeIsert.src);
        };
    } ;
    
    let meme = document.getElementById("image");
    meme.addEventListener(change, imageMeme);
}

