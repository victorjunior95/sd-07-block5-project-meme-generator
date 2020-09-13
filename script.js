window.onload = function () {
//     sectionStart();
       insertText();
       fetch();
//
//     function sectionStart() {
//         let position = document.querySelector("#listaElementos").parentNode;
//         let section = document.createElement('section');
//         //section.setAttribute("id", "sectionId");
//         section.id = "sectionId";
//         section.className = "sectionClass";
//         position.appendChild(section);
//     }


    function fetch() {
        // document.querySelector("#btnFileUpload").addEventListener("click", function () {
        //     let path = document.querySelector("#meme-image-container").childNodes[1]; //encontra meu form acesando seu pai
        //     let input = document.querySelector("#myFile"); //obtenho onde está meu input que busca o arquivo
        //     let myImg = document.createElement("IMG"); //crio uma tag img que irá conter minha imagem
        //     myImg.id = "imageId"; //crio uma id para minha img
        //     path.appendChild(myImg); // insiro minha tag img no arquivo html de forma dinamica
        //     let fReader = new FileReader(); // O objeto Filereader foi utilizado para ler o path do arquivo ou Blob,  mais sobre blob aquie https://developer.mozilla.org/en-US/docs/Web/API/Blob
        //     console.log(fReader);
        //     fReader.readAsDataURL(input.files[0]); //busca a url do arquivo e retorna 'DONE' caso a encontre
        //     fReader.onloadend = function (event){  // exemplo de código retirado de https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        //         let img = document.querySelector("#imageId");
        //         img.src = event.target.result;
        //     }
        // });
    }
      function insertText() {
         document.querySelector("#text-input").addEventListener("click", function () {
            let textP = document.querySelector("#meme-image-container");
            let text = document.querySelector("#text-input");
            let p = document.createElement('p');
            p.id = "meme-text";
            p.textContent = text.value;
                textP.appendChild(p);
                text.value = "";
                text.focus();
         });
//         // p.appendChild(content);
//         // document.body.appendChild(p); // adiciono minha tag ao corpo da pagina
        }
}
