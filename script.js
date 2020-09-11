const textOutput = document.querySelector('#meme-text');
document.querySelector('#text-input').addEventListener('keyup', (event) => {
    textOutput.innerHTML = event.target.value;
});

document.querySelector('#meme-insert').addEventListener('change', (event) => {
    const image = document.querySelector('#meme-image');
    image.src = URL.createObjectURL(event.target.files[0]);
});
