
function validar() {

    var mail = document.getElementById("correo").value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if (document.getElementById("nombreCompleto").value == "") {
        document.getElementById("nombreCompleto").classList.add("valid");
        return false
    }
    if (document.getElementById("mensaje").value == "") {
        document.getElementById("mensaje").classList.add("valid");
        return false
    }
    if (document.getElementById("correo").value == "") {
        document.getElementById("correo").classList.add("valid");
        return false
    }

    if (regx.test(mail)) {
        return true
    }
    else {
        alert("Ingresó un correo incorrecto, intente de nuevo.")
        return false;
    }
}

function enviarMensaje() {
    var datos = {
        nombreCompleto: document.getElementById("nombreCompleto").value,
        correo: document.getElementById("correo").value,
        mensaje: document.getElementById("mensaje").value
    }

    fetch("http://localhost:5000/contactos/insertar", {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(
            function (response) {
                return response.json();
            }
        )
}