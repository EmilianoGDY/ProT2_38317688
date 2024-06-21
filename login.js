function loguear(){


    let user= document.getElementById("usuario").value;

    let pass= document.getElementById("pass").value;

    let permitidos = ["Emiliano", "JuanP", "Miguelon","Carlos11"];

    if(permitidos.includes(user) && pass=="1234"){
        window.location="main.html";
    }
    else{
        alert("Datos Incorrectos");
    }

}