 /**Idéia retirada de: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images */


 const chooseImage = document.getElementById('meme-insert');
 const tagText = document.getElementById('text-input')
 const tagFigure = document.getElementById('meme-image-container');
 const tagImg = document.getElementById('meme-image');
 const tagSpan = document.getElementById('meme-text');


 chooseImage.addEventListener('change', function () {
  tagSpan.innerText = '';
   for (let i = 0; i < this.files.length; i++) { // pesquisar de onde saiu esse files

     tagImg.src = URL.createObjectURL(this.files[i]);

     tagFigure.appendChild(tagImg);

     tagSpan.innerText = tagText.value;

     tagFigure.appendChild(tagSpan);
   }
 });
