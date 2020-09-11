let memeInsert = document.querySelector('#meme-insert');
memeInsert.addEventListener('change', function(event){
    let imageInsert = document.getElementById('meme-image');
    imageInsert.src = URL.createObjectURL(event.target.files[0]);
    imageInsert.onload = function() {
        URL.revokeObjectURL(imageInsert.src);
    }
})