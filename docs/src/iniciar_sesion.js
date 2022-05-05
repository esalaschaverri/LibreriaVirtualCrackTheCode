
function validar() {

    var mail = document.getElementById("text").value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if (document.getElementById("text").value == "") {
        document.getElementById("text").classList.add("valid");
        return false;
    }
    if (document.getElementById("password").value == "") {
        document.getElementById("password").classList.add("valid");
        return false;
    }

    if (regx.test(mail)) {
        return true
    }
    else {
        alert("Ingresó un correo incorrecto, intente de nuevo.")
        return false;
    }
}

