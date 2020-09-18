
// const textInput = document.getElementById('text-input');
// const memeText = document.getElementById('meme-text');
// textInput.addEventListener ('input', function( ) {
//         memeText.innerHTML = textInput.value;
// });

// const memeInsert = document.getElementById('meme-insert');
// const memeImage = document.getElementById('meme-image');
// memeInsert.addEventListener ('change', function (event) {
//         memeImage.src = URL.createObjectURL(event.target.files[0]);
//         memeImage.onload = function () {
//             URL.revokeObjectURL(memeImage.src);
//     };
// });

window.onload = function(){
        setupMemeTextInput();
}

function setupMemeTextInput() {
        let textInput = document.querySelector("#text-input");
        textInput.addEventListener("input", function(event){
        let text = event.target.value;
        let memeTextP = document.querySelector("#meme-text")
        memeTextP.innerText = text;
        });
}