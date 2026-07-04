document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const correoInput = document.getElementById('correo').value;
    const passwordInput = document.getElementById('password').value;
    const feedback = document.getElementById('mensajeFeedback');

    feedback.textContent = "";
    feedback.style.color = "black";

  
    if (!validarCorreo(correoInput)) {
        feedback.textContent = "El formato del correo es incorrecto.";
        feedback.style.color = "red";
        return; 
    }

    if (!validarPassword(passwordInput)) {
        feedback.textContent = "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
        feedback.style.color = "red";
        return; 
    }

    feedback.textContent = "¡Acceso concedido exitosamente!";
    feedback.style.color = "green";
    
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
});