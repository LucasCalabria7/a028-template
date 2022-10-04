function checaCaps(event) {
    if(event.shiftKey) {
        document.getElementById("mensagem").innerHTML = "SHIFT PRESSIONADO"
    } else {
        document.getElementById("mensagem").innerHTML = "SHIFT NÃO PRESSIONADO"
    }
}