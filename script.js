
window.onload = function () {

text_input_box = document.querySelector('#text-input');
text_input_box.addEventListener('change', function() {
    let text_input = document.querySelector('#text-input').value;
    let text_meme = document.querySelector('#meme-text');
    text_meme.innerText = text_input;
})
}