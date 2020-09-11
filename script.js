window.onload = function (){
  let input = document.querySelector('#text-input')
  let output = document.querySelector('#meme-text')
  input.addEventListener('change',function(){
    output.innerText = input.value;
  })
}
