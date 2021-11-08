function validaForm(formulario) {
    //Valida el susuario
    var usuario = formulario.usuario;
    if (usuario.value == "" || usuario.value == "Escribir usuario") {
        alert("Debe tener un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }

    //Valida contraseña
    var password = formulario.password;
    if (password.value == "" || password.value.length < 3) {
        alert("Debe tener una contraseña de al menos 3 caracteres");
        password.focus();
        password.focus();
        return false;
    }

    //Formulario validado
    alert("Formulario valido, enviando datos...");
    return true;
}