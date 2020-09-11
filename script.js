let textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', () => {
   let newOutput = document.querySelector('#meme-text');
   
   newOutput.innerText = textInput.value;
});

function loadFile (e) {
   let output = document.querySelector('#meme-image');

   output.src = URL.createObjectURL(e.target.files[0]);
   output.onload = () => {
      URL.revokeObjectURL(output.src);
   }
};