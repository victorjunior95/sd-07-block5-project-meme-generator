let loadFile = function (event) { // Function taken from: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    let output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
}

let container = document.getElementById('meme-image-container');
