const formRegistro = document.getElementById('formRegistro');
const modal = document.getElementById('modalEdad');
const textoModal = document.getElementById('textoModal');
const btnCerrarModal = document.getElementById('cerrarModal');

formRegistro.addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const fechaNac = document.getElementById('fechaNac').value;

    if(!soloLetras(nombre)){
        alert("El nombre solo puede contener letras y espacios.")
        return;
    }

    
    if(!validarTelefono(telefono)){
        alert("El teléfono debe tener exactamente 10 números válidos.");
        return;
    }

    const edadExacta = calcularEdad(fechaNac);
    const esMayor = esMayorDeEdad(fechaNac);

    let mensaje = `Hola, ${nombre}. Tienes ${edadExacta} años. `;

    if(esMayor){
        mensaje += "Eres mayor de edad, registro permitido.";
    }else{
        mensaje += "Eres menor de edad, necesitas permiso de un tutor.";
    }

    textoModal.textContent = mensaje;

    console.log(" Ejecutando funciones de la Sección Libre...");
    console.log("Teléfono con formato válido (10 dígitos):", validarTelefono(telefono));
    console.log("ID Único de sesión generado para la BD:", generarIdUnico());

    modal.showModal(); 

});

btnCerrarModal.addEventListener('click', function(){
    modal.close();
});
    
