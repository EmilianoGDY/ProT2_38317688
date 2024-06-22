function loguear(){


    const user= document.getElementById("usuario").value;

    const pass= document.getElementById("pass").value;

    const permitidos = ["Emiliano", "JuanP", "Miguelon","Carlos11"];

    if(permitidos.includes(user) && pass=="1234"){
        window.location="inicio.html";
    }
    else{
        alert("Datos Incorrectos");
    }

}