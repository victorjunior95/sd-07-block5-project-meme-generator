window.onload = function (){
  let input = document.querySelector('#text-input')
  let output = document.querySelector('#text-output')
  input.addEventListener('change',function(){
    output.innerText = input.value;
  })
}
