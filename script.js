    console.log('Rita');
    //var text = document.getElementById("text-imput").innerText;
   //var box = document.getElementById("meme-text");
 
   //function transferText {
   
   // box = text.value;   
   //}  
   //text.AddEventListener(keyup,transferText);  
   
   // Mudando Borda do Container
   //Fire Button
   const container = document.getElementById("meme-image-conteiner");
   //const buttonFire = document.getElementById("fire");
   //buttonFire.addEventListener('click', function() {
   //container.style.border = '3px dashed black';
   //});
   document.body.addEventListener('click', function(event) {
      if (event.target.nodeName === 'BUTTON'){
      //container.style.border = '3px dashed black';
      console.log(event.target);
   }
 });

  // Enviando imagens do botão para a caixa passando o src
  const buttonImage1 = document.getElementById("meme-1");
  buttonImage1.addEventListener('click', function() {
  document.getElementById("img-container").innerHTML = '<img src=./imgs/bobesponja.png>';
  });

 //function uploadImage
  function Uploadimg() {
     let buttomImgUpload = document.getElementById("upload");
     buttomImgUpload.addEventListener('click', function(){
        document.getElementById("image-container").src = window.URL.createObjectURL("*.png");  
     })
  } 
  Uploadimg ();

//<img id="*.png" alt="your image" width="100" height="100" />
//<input type="file" 
//onchange="document.getElementById('*.png').src = window.URL.createObjectURL(this.files[0])">
 
