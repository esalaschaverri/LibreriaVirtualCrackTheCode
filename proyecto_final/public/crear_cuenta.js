
function insertarCuenta() {


    var datos = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        genero: document.getElementById("genero").value,
        numeroCedula: document.getElementById("cedula").value,
        tipoCedula: document.getElementById("tipoCedula").value,
        provincia: document.getElementById("provincia").value,
        canton: document.getElementById("canton").value,
        distrito: document.getElementById("distrito").value,
        direccion: document.getElementById("direccion").value,
        //latitud: document.getElementById("direccion").value,
        //longitud: document.getElementById("direccion").value,
        //fotoPerfil: document.getElementById("email").value,
        latitud: 88,
        longitud: 10,
        fotoPerfil: '',
        correo: document.getElementById("email").value,
        contrasena: document.getElementById("password").value
    }

    fetch("http://localhost:5000/usuarios/insertar", {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {'Content-Type': 'application/json'}
    })
        .then(
            function(response){
                return response.json();
            }
        )
}

function validar() {

    var mail = document.getElementById("email").value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;


    if (document.getElementById("nombre").value == "") {
        document.getElementById("nombre").classList.add("valid");
    }

    if (document.getElementById("apellidos").value == "") {
        document.getElementById("apellidos").classList.add("valid");
    }

    if (document.getElementById("genero").value == "") {
        document.getElementById("genero").classList.add("valid");
    }

    if (document.getElementById("cedula").value == "") {
        document.getElementById("cedula").classList.add("valid");
    }

    if (document.getElementById("tipoCedula").value == "") {
        document.getElementById("tipoCedula").classList.add("valid");
    }

    if (document.getElementById("provincia").value == "") {
        document.getElementById("provincia").classList.add("valid");
    }

    if (document.getElementById("canton").value == "") {
        document.getElementById("canton").classList.add("valid");
    }

    if (document.getElementById("distrito").value == "") {
        document.getElementById("distrito").classList.add("valid");
    }

    if (document.getElementById("direccion").value == "") {
        document.getElementById("direccion").classList.add("valid");
    }

    if (document.getElementById("email").value == "") {
        document.getElementById("email").classList.add("valid");
    }

    if (document.getElementById("password").value == "") {
        document.getElementById("password").classList.add("valid");
    }

    if (regx.test(mail)) {
        return true
    }
    else {
        alert("Ingresó un correo incorrecto, intente de nuevo.")
    }
    return false;

}
