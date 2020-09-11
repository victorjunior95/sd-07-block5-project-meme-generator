window.onload = function (){
  const input = document.querySelector('#text-input');
  const output = document.querySelector('#meme-text');
  const imgload = document.querySelector('#meme-insert');
  const imgout = document.querySelector('#meme-image');
  const container = document.querySelector('#meme-image-container')
  input.addEventListener('input',function (){
    output.innerText = input.value;
  })
  imgload.addEventListener('input',function (){
    console.log(imgload.value);
    imgout.src=imgload.value;
  });
  document.querySelector('#earth').addEventListener('click',function (){
    container.style.border = '6px goove green'
    console.log('erf')
  })
  document.querySelector('#water').addEventListener('click',function (){
    container.style.border = '5px double blue'
  })
  document.querySelector('#fire').addEventListener('click',function (){
    container.style.border = '3px dashed red'
  })
};
