const nombre = document.getElementById("name")
const apellido = document.getElementById("surname")
const usuario = document.getElementById("user")
const email = document.getElementById("email")
const contrasena = document.getElementById("pass")
const parrafo = document.getElementById("warnings")
const form = document.getElementById("form")


function registrar(){ e=>{
    
    let warnings = ''
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false
    if (nombre.value.length < 6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    if(contrasena.value.lenght < 8){
        warnings += `La contrasenia no es valida`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
    form.submit()
} }
