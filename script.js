let memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', function(event){
    let imageInsert = document.getElementById('meme-image');
    imageInsert.src = URL.createObjectURL(event.target.files[0]);
    imageInsert.onload = function() {
        URL.revokeObjectURL(imageInsert.src);
    }
})

let textInput = document.querySelector('#text-input');
textInput.addEventListener('input', function() {
    if (textInput.value.length <= 60) {
        let memeText = document.querySelector('#meme-text').innerText = textInput.value; 
    } else {
        console.log("Você ultrapassou o limite de caracteres");
    } 
})