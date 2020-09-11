window.onload = function() {

    // Function that load the Photo to Meme
    let loadPhoto = function(event) {
        let divMemeImage = document.getElementById('meme-image');
        divMemeImage.src = URL.createObjectURL(event.target.files[0]);
        divMemeImage.onload = function() {
            URL.revokeObjectURL(divMemeImage.src) // free memory
        }
    }

    // Function that apply text on meme
    let applyText = function() {
        // get input text
        let textInput = document.getElementById("text-input").value;
        console.log("textMeme");
        // put text on meme
        let memeText = document.getElementById("meme-text");
        memeText.innerText = textInput;
    }

    // Get Element meme-insert and assign the event loadPhoto
    document.getElementById("meme-insert").addEventListener("change",loadPhoto);
    
    // Get Element meme-input and assign the event applyText
    document.getElementById("text-input").addEventListener("input",applyText);
}
