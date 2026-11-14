
function validarNombre(){
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("errorNombre");

    if (nombre.length < 3){
        errorNombre.textContent = "El nombre debe tener minimo 3 caracteres.";
        errorNombre.style.backgroundColor="#ee6f6f"
        return false;
    }
    else{
        errorNombre.textContent = "";
        errorNombre.style.backgroundColor="#ffffff"
        return true;
    }
}
document.getElementById("nombre").addEventListener("input", validarNombre);


function validarApellidos(){
    const apellidos = document.getElementById("apellidos").value.trim();
    const errorApellidos = document.getElementById("errorApellidos");

    if (apellidos.length < 3){
        errorApellidos.textContent = "Los apellidos deben tener minimo 3 caracteres.";
        errorApellidos.style.backgroundColor="#ee6f6f"
        return false;
    }
    else{
        errorApellidos.textContent = "";
        errorApellidos.style.backgroundColor="#ffffff"
        return true;
    }
}
document.getElementById("apellidos").addEventListener("input", validarApellidos);


function validarDocumento(){
    const documento = document.getElementById("documento").value.trim();
    const errorDocumento = document.getElementById("errorDocumento");

    if (!/^\d{6,10}$/.test(documento)){
        errorDocumento.textContent = "Ingrese un documento entre 6 y 10 numeros.";
        errorDocumento.style.backgroundColor="#fd8c8c";
        return false;
    }
    else{
        errorDocumento.textContent="";
        errorDocumento.style.backgroundColor="#fff";
        return true;
    }
}
document.getElementById("documento").addEventListener("input", validarDocumento);


function validarCorreo(){
    const correo = document.getElementById("correo").value.trim();
    const errorCorreo = document.getElementById("errorCorreo");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        errorCorreo.textContent = "Ingrese un correo electronico valido.";
        errorCorreo.style.backgroundColor="#f57474";
        return false;
    }
    else{
        errorCorreo.textContent="";
        errorCorreo.style.backgroundColor="#fff";
        return true;
    }
}
document.getElementById("correo").addEventListener("input", validarCorreo);


function validarTelefono(){
    const telefono = document.getElementById("telefono").value.trim();
    const errorTelefono = document.getElementById("errorTelefono");

    if(!/^\d{10}$/.test(telefono)){
        errorTelefono.textContent="El telefono debe tener exactamente 10 numeros.";
        errorTelefono.style.backgroundColor="#f68282";
        return false;
    }
    else{
        errorTelefono.textContent="";
        errorTelefono.style.backgroundColor="#fff";
        return true;
    }
}
document.getElementById("telefono").addEventListener("input", validarTelefono);


function validarEdad(){
    const edad = document.getElementById("edad").value.trim();
    const errorEdad = document.getElementById("errorEdad");

    if(isNaN(edad) || edad < 18 || edad > 60){
        errorEdad.textContent="La edad debe estar entre 18 y 60 añoos.";
        errorEdad.style.backgroundColor="#f96c6c";
        return false;
    }
    else{
        errorEdad.textContent="";
        errorEdad.style.backgroundColor="#FFF";
        return true;
    }
}
document.getElementById("edad").addEventListener("input", validarEdad);


function validarContrasena(){
    const contrasena = document.getElementById("contrasena").value;
    const errorContrasena = document.getElementById("errorContrasena");

    if(!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena)){
        errorContrasena.textContent="Minimo 8 caracteres, una mayuscula y un numero.";
        errorContrasena.style.backgroundColor="#ff7c7c";
        return false;
    }
    else{
        errorContrasena.textContent="";
        errorContrasena.style.backgroundColor="#fff";
        return true;
    }
}
document.getElementById("contrasena").addEventListener("input", validarContrasena);


function validarConfirmar(){
    const contrasena = document.getElementById("contrasena").value;
    const confirmar = document.getElementById("confirmar").value;
    const errorConfirmar = document.getElementById("errorConfirmar");

    if(confirmar === "" || confirmar !== contrasena){
        errorConfirmar.textContent="Las contraseñas no coinciden.";
        errorConfirmar.style.backgroundColor="#fd7373";
        return false;
    }
    else{
        errorConfirmar.textContent="";
        errorConfirmar.style.backgroundColor="#fff";
        return true;
    }
}
document.getElementById("confirmar").addEventListener("input", validarConfirmar);
document.getElementById("contrasena").addEventListener("input", validarConfirmar);


function validarPrograma(){
    const programa = document.getElementById("programa").value;
    const errorPrograma = document.getElementById("errorPrograma");

    if(programa === ""){
        errorPrograma.textContent="Seleccione un programa de formacion";
        errorPrograma.style.backgroundColor="#ff7979";
        return false;
    }
    else{
        errorPrograma.textContent="";
        errorPrograma.style.backgroundColor="#fff";
        return true;
    }
}
document.getElementById("programa").addEventListener("input", validarPrograma);

function validarterminos(){
    const terminos = document.getElementById("terminos").checked;
    const errorTerminos = document.getElementById("errorTerminos");

    if(!terminos){
        errorTerminos.textContent="Debe aceptar los terminos y condiciones.";
        errorTerminos.style.backgroundColor="#f87171";
        return false;
    }
    else{
        errorTerminos.textContent="";
        errorTerminos.style.backgroundColor="#fff";
        return true;
    }
}
document.getElementById("terminos").addEventListener("change", validarterminos);


const formulario = document.getElementById("formulario");
const btnRegistrar = document.getElementById("btnRegistrar");
const mensajeFinal = document.getElementById("mensajeFinal");

function validarFormulario(){
    let resultado = true;

    if(!validarNombre()) resultado = false;
    if(!validarApellidos()) resultado = false;
    if(!validarDocumento()) resultado = false;
    if(!validarCorreo()) resultado = false;
    if(!validarTelefono()) resultado = false;
    if(!validarEdad()) resultado = false;
    if(!validarContrasena()) resultado = false;
    if(!validarConfirmar()) resultado = false;
    if(!validarPrograma()) resultado = false;
    if(!validarterminos()) resultado = false;

    btnRegistrar.disabled = !resultado;
    return resultado;
}

function enviarFormulario(event){
    event.preventDefault();

    if(validarFormulario()){
        mensajeFinal.textContent = "¡Estudiante registrado correctamente!";
        mensajeFinal.style.color="green";
        formulario.reset();

        const campos = document.querySelectorAll("input", select);
        for(let i=0; i<campos.length;i++){
            campos[i].classList.remove("error", "Exito");
        }
        const mensajes = document.querySelectorAll("small");
        for(let i=0; i<mensajes.length; i++){
            mensajes[i].textContent="";
            mensajes[i].className="";
        }
        btnRegistrar.disabled=true;
    }
}
formulario.addEventListener("submit", enviarFormulario);