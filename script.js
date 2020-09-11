let textInput = document.querySelector('#text-input');
let buttons = document.querySelectorAll('button');
let imageClick = document.querySelector('#pre-memes').querySelectorAll('img');

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

for (let i = 0; i < buttons.length; i += 1){
   let border = document.querySelector('#meme-image-container');

   buttons[i].addEventListener('click', () => {
      if (i === 0) {
         border.style.border = 'red dashed 3px';
      } else if ( i === 1) {
         border.style.border = 'blue double 5px';
      }else if ( i === 2) {
         border.style.border = 'green groove 6px';
      }
   });
}

for (let i = 0; i < imageClick.length; i += 1){
   let output = document.querySelector('#meme-image');

   imageClick[i].addEventListener('click', () => {
      if (i === 0) {
         output.src = './imgs/chloe.jpg';
      } else if ( i === 1) {
         output.src = './imgs/michel-temer.jpg';
      } else if ( i === 2) {
         output.src = './imgs/voldemort.jpg';
      } else if ( i === 3) {
         output.src = './imgs/fry.jpg';
      }
   });
}