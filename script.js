window.onload = function () {

text_input_box = document.querySelector('#text-input');
text_input_box.addEventListener('change', function() {
    let text_input = document.querySelector('#text-input').value;
    let text_meme = document.querySelector('#meme-text');
    text_meme.innerText = text_input;
})

meme_insert_box = document.querySelector('#meme-insert');
meme_insert_box.addEventListener('change', function() {
    let meme_insert = document.querySelector('#meme-insert').value;
    let meme_image = document.querySelector('#meme-image');
    meme_image = meme_insert;
})
}
