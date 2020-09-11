document.querySelector('#text-input').addEventListener('keyup', function () {
  document.querySelector('#meme-text').innerHTML = document.querySelector('#text-input').value;
});

document.querySelector('#meme-insert').addEventListener('change', function (event) {
  const img = document.querySelector('#image');
  img.src = URL.createObjectURL(event.target.files[0]);
}); /* get code helper on https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977 */


document.querySelector('#fire').addEventListener('click', function () {
  const container = document.querySelector('.meme-image-container');

  container.style.borderColor = 'red';
  container.style.borderStyle = 'dashed';
  container.style.borderWidth = '5px';
});

document.querySelector('#water').addEventListener('click', function () {
  const container = document.querySelector('.meme-image-container');

  container.style.borderColor = 'blue';
  container.style.borderStyle = 'groove';
  container.style.borderWidth = '10px';
});

document.querySelector('#earth').addEventListener('click', function () {
  const container = document.querySelector('.meme-image-container');

  container.style.borderColor = 'brown';
  container.style.borderStyle = 'outset';
  container.style.borderWidth = '15px';
});

document.querySelector('#src1').addEventListener('click', function () {
  const img = document.querySelector('#image');
  img.src = document.querySelector('#src1').src;
});

document.querySelector('#src2').addEventListener('click', function () {
  const img = document.querySelector('#image');
  img.src = document.querySelector('#src2').src;
});

document.querySelector('#src3').addEventListener('click', function () {
  const img = document.querySelector('#image');
  img.src = document.querySelector('#src3').src;
});

document.querySelector('#src4').addEventListener('click', function () {
  const img = document.querySelector('#image');
  img.src = document.querySelector('#src4').src;
});