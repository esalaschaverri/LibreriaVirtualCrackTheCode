
function validar() {
    if (document.getElementById("usuario").value == "") {
        document.getElementById("usuario").classList.add("valid");
        return false;
    }
    if (document.getElementById("usuario").value != "user") {
        document.getElementById("usuario").classList.add("valid");
        alert("Usuario incorrecto, intente de nuevo");
        return false;
    }
    if (document.getElementById("password").value == "") {
        document.getElementById("password").classList.add("valid");
        return false;
    }
}
