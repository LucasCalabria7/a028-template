function escondeSenha(event) {
    event.preventDefault()

    let input = document.getElementById('password')
    input.setAttribute("type", "password")
}

function mudaPraDark (){
    let form = document.getElementById("form")

    form.classList.remove("light")
    form.classList.add("dark")
}
mudaPraDark()
