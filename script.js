btn = document.getElementById("btn")
login = document.getElementById("login")
senha = document.getElementById("senha")

btn.addEventListener("click", function(event){
    event.preventDefault()
    if(login.value == "admin" && senha.value == "admin"){
        mensagem.classList.remove("mensagem-erro")
        mensagem.innerHTML = "Login realizado com sucesso!"        
        mensagem.classList.add("mensagem-sucesso")

    }  else {
        mensagem.innerHTML = "Login ou senha incorreta"
        mensagem.classList.remove("mensagem-sucesso")
        mensagem.classList.add("mensagem-erro")
    }
})