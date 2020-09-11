function loadFile (e) {
   let output = document.querySelector('#output-meme');

   output.src = URL.createObjectURL(e.target.files[0]);
   output.onload = () => {
      URL.revokeObjectURL(output.src);
   }
};
