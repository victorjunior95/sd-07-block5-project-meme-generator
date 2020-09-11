let textButton = document.querySelector('#text-button');
textButton.addEventListener('click', () => {
   let text = document.querySelector('#text-input').value;
   let newOutput = document.querySelector('#meme-text');
   
   newOutput.innerText = text;
});

function loadFile (e) {
   let output = document.querySelector('#meme-image');

   output.src = URL.createObjectURL(e.target.files[0]);
   output.onload = () => {
      URL.revokeObjectURL(output.src);
   }
};