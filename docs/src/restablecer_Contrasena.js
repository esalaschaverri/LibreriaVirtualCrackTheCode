function validar() {

    var mail = document.getElementById("email").value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if (document.getElementById("email").value == "") {
        document.getElementById("email").classList.add("valid");
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

