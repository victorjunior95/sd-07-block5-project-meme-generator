window.onload = function (){
  let input = document.querySelector('#text-input')
  let output = document.querySelector('#meme-text')
  let imgload = document.querySelector('#meme-insert')
  let imgout = document.querySelector('#meme-image')
  input.addEventListener('input',function(){
    output.innerText = input.value;
  })
  imgload.addEventListener('input',function(){
    console.log(imgload.value);
    imgout.src=imgload.value;
  })
}
