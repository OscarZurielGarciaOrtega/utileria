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

<img width="1860" height="891" alt="Captura de pantalla 2026-07-04 182826" src="https://github.com/user-attachments/assets/94e1a0c2-4d6a-4461-a739-b9a3144b4a3e" />

<img width="1856" height="882" alt="Captura de pantalla 2026-07-04 182810" src="https://github.com/user-attachments/assets/5730041f-76f6-4f48-a3b2-a16a2c996cb0" />

<img width="717" height="767" alt="Captura de pantalla 2026-07-04 182939" src="https://github.com/user-attachments/assets/402fc2bd-301d-47a3-8247-6de318b1bca5" />

<img width="1855" height="887" alt="Captura de pantalla 2026-07-04 183928" src="https://github.com/user-attachments/assets/ac964278-38cd-4a50-826b-286e23b182cb" />

<img width="1855" height="885" alt="Captura de pantalla 2026-07-04 184259" src="https://github.com/user-attachments/assets/c6e59985-8978-46c0-8747-5be3fba8ed10" />


---

##  Demo Promocional (Pitch de 60 segundos)
[Haz clic aquí para ver el video demostrativo de Utilería.js en acción](PON_AQUI_EL_LINK_DE_TU_VIDEO)
