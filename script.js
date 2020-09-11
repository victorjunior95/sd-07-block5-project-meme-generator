window.onload = function() {

    // Function that load the Photo to Meme
    let loadPhoto = function(event) {
        let divMemeImage = document.getElementById('meme-image');
        divMemeImage.src = URL.createObjectURL(event.target.files[0]);
        divMemeImage.onload = function() {
            URL.revokeObjectURL(divMemeImage.src) // free memory
        }
    }

    // Get Element meme-insert and assign the event loadPhoto
    document.getElementById("meme-insert").addEventListener("change",loadPhoto);
}
