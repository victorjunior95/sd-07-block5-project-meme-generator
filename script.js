function loadFile(event){
  let meme_image = document.getElementById('meme-image');
  meme_image.src = URL.createObjectURL(event.target.files[0]);
  meme_image.onload = function() {
    URL.revokeObjectURL(output.src);
  }
}
