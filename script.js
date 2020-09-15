    //let inp = document.getElementById('text-input').value;
    //let texto= document.getElementById('texto');
    
    //texto.addEventListener("oninput", function(){
      
        //texto.innerHTML = inp;


   // })
    

let inp = document.getElementById('text-input');

  inp.oninput = function () {
  let textop = document.getElementById('texto');
  let textof= inp.value
   textop.innerText = textof;
}

