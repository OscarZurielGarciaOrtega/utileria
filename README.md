#  Utilería.js - Librería de Validaciones

**Autor:** Oscar Zuriel García Ortega  
**Modalidad:** Individual

##  ¿Qué problema resuelve?
Esta librería proporciona una serie de herramientas de validación de datos comunes (correos, contraseñas, edades) y formateo de texto en el lado del cliente (Frontend) utilizando Vanilla JavaScript puro. Su objetivo es evitar la dependencia de frameworks externos y componentes visuales prefabricados, permitiendo a los desarrolladores mantener la lógica completamente separada de la vista (HTML) y mejorando el rendimiento de los formularios web.

---

##  Instalación

Para utilizar esta librería en tu proyecto, simplemente incluye el archivo `utileria.js` dentro de tu documento HTML. Se recomienda usar el atributo `defer` en el `<head>` o colocar el script justo antes de cerrar la etiqueta `</body>`:

```html
<script src="js/utileria.js" defer></script>
```

---

## 🛠️ Uso y Ejemplos de Código

Aquí tienes ejemplos de cómo implementar las funciones principales en tu lógica de interfaz (controlador):

### 1. Validar formato de Correo y Contraseña
```javascript
const correo = "usuario@ejemplo.com";
const pass = "SuperClave123.";

if(validarCorreo(correo) && validarPassword(pass)){
    console.log("Credenciales con formato válido.");
}
```

### 2. Calcular Edad a partir de Fecha de Nacimiento
```javascript
const fechaNacimiento = "2004-05-25";
const edad = calcularEdad(fechaNacimiento); // Retorna entero (ej. 22)

if(esMayorDeEdad(fechaNacimiento)){
    console.log(`Tienes ${edad} años. Acceso permitido al sistema.`);
}
```

### 3. Sección Libre (Funciones Adicionales)
Se integraron dos funciones extra orientadas a la validación de datos para registro y bases de datos:
* **`validarTelefono(telefono)`**: Asegura mediante Expresiones Regulares que un input contenga exactamente 10 dígitos numéricos.
* **`generarIdUnico()`**: Genera un token alfanumérico aleatorio, útil para simular identificadores de sesión o llaves primarias en una base de datos.

```javascript
// Ejemplo de uso de la sección libre
const telValido = validarTelefono("9512756492"); 
const idSesion = generarIdUnico(); 
```

---

##  Capturas de Pantalla

*(Resultados de ejecución y validación de la Sección Libre en Consola)*

(ARRASTRA_TU_IMAGEN_AQUI)

---

## 🎥 Demo Promocional (Pitch de 60 segundos)
[Haz clic aquí para ver el video demostrativo de Utilería.js en acción](PON_AQUI_EL_LINK_DE_TU_VIDEO)
