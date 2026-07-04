function validarCorreo(correo){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function soloLetras(texto){
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto)
}

function validarLongitud(numero , maxLongitud){
    const numStr = String(numero);
    return numStr.length <= maxLongitud;
}

function calcularEdad(fechaNacimiento){
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if(mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())){
        edad--;
    }
    return edad;
}

function esMayorDeEdad(fechaNacimiento){
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}

function validarTelefono(telefono){
    const regex = /^\d{10}$/; 
    return regex.test(telefono);
}

function generarIdUnico(){
    return Math.random().toString(36).substring(2, 10);
}