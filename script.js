function inputText () {
    const memeText = document.querySelector('#meme-text');
    const textInput = document.querySelector('#text-input');
    textInput.addEventListener('input', () => {
    memeText.innerHTML = inputText.value;
    });
}
function borderRed () {
    const buttonFire = document.querySelector('#fire')
    const memeImageContainer = document.querySelector('#meme-image-container');
    buttonFire.addEventListener('click', () => {
    memeImageContainer.style.border = '3px dashed red';
    });
}
function borderWater () {
    const buttonWater = document.querySelector('#water')
    const memeImageContainer = document.querySelector('#meme-image-container');
    buttonWater.addEventListener('click', () => {
    memeImageContainer.style.border = '5px double red';
    });
}
function borderEarth () {
    const buttonEarth = document.querySelector('#earth')
    const memeImageContainer = document.querySelector('#meme-image-container');
    buttonEarth.addEventListener('click', () => {
    memeImageContainer.style.border = '6px groove green';
    });
}

window.onload = () => {
    inputText ()
    borderRed ()
    borderWater ()
    borderEarth ()
}