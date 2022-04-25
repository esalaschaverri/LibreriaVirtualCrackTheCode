
function validar() {

    var mail = document.getElementById("email").value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if (document.getElementById("nombre").value == "") {
        document.getElementById("nombre").classList.add("valid");
        return false
    }
    if (document.getElementById("mensaje").value == "") {
        document.getElementById("mensaje").classList.add("valid");
        return false
    }
    if (document.getElementById("email").value == "") {
        document.getElementById("email").classList.add("valid");
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