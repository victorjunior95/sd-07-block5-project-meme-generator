

    function transferText{
      let text = document.getElementbyId("text-imput");
      let box = document.getElementById("meme-text");
      box.innerText = text.value;
      console.log(text);
      console.log(box);
    }
    text.AddEventListener(keyup,transferText());  
 