 /**Idéia retirada de: https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images */


 const chooseImage = document.getElementById('meme-insert');
 const tagText = document.getElementById('text-input')
 const tagFigure = document.getElementById('meme-image-container');
 const tagImg = document.getElementById('meme-image');
 const tagTextMeme = document.getElementById('meme-text');

 const tagButton1 = document.getElementById('fire');
 const tagButton2 = document.getElementById('water');
 const tagButton3 = document.getElementById('earth');

 tagButton1.addEventListener('click', function(){
   tagFigure.style.border = "3px dashed rgb(255, 0, 0)";
   tagFigure.style.boxShadow = "4px 4px 4px black";
   tagFigure.style.backgroundColor = "rgb(255, 0, 0)";
 });

 tagButton2.addEventListener('click', function(){
  tagFigure.style.border = "5px double rgb(0, 0, 255)";
  tagFigure.style.boxShadow = "4px 4px 4px black";
  tagFigure.style.backgroundColor = "rgb(0, 0, 255)";
});

tagButton3.addEventListener('click', function(){
  tagFigure.style.border = "6px groove rgb(0, 128, 0)";
  tagFigure.style.backgroundColor = "rgb(0, 128, 0)";
});


 tagText.addEventListener('keyup', function(){
  tagTextMeme.innerText = tagText.value;
 });

 chooseImage.addEventListener('change', function () {

   for (let i = 0; i < this.files.length; i++) { // pesquisar de onde saiu esse files
     tagImg.src = URL.createObjectURL(this.files[i]);

     tagFigure.appendChild(tagImg);
   }
 });
