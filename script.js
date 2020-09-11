window.onload = function () {
    let divInputText = document.getElementsByClassName("div-insert")[0]
    function buttonTextInsert (divInputText) {
        sendButton = document.createElement("button")
        sendButton.innerHTML = "Enviar"
        divInputText.appendChild(sendButton)
    }
    buttonTextInsert(divInputText)
}
