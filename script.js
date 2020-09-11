window.onload = function() {
    function buttonTextInsert() {
       divInputText = document.getElementsByClassName('div-insert')[0]
        console.log(divInputText)

       sendButton = document.createElement('button')
       sendButton.innerHTML = 'Enviar'
       divInputText.appendChild(sendButton)
    }
    buttonTextInsert()

    function sendTextInput() {
        
    }
}