#  Utilería.js - Librería de Validaciones

| Datos del Alumno | Información del Proyecto |
| :--- | :--- |
| **Autor:** Oscar Zuriel García Ortega | **Materia:** Programación Web |
| **Modalidad:** Individual | **Librería:** Vanilla JavaScript (No Frameworks) |

---

##  ¿Qué problema resuelve?
Esta librería proporciona una serie de herramientas de validación de datos comunes (correos, contraseñas, longitudes, formatos de texto y fechas) y formateo en el lado del cliente (Frontend) utilizando Vanilla JavaScript puro. 

Su objetivo principal es evitar la dependencia de frameworks externos pesados y componentes visuales prefabricados. Esto permite a los desarrolladores mantener la lógica de negocio completamente separada de la vista (HTML), optimizando el rendimiento de los formularios web y asegurando la integridad de los datos antes de ser enviados al servidor o procesados por una base de datos.

---

##  Instalación

Para utilizar esta librería en tu proyecto, simplemente incluye el archivo `utileria.js` dentro de tu documento HTML. Se recomienda usar el atributo `defer` dentro de la etiqueta `<head>` o colocar el script justo antes de cerrar la etiqueta `</body>`:

```html
<script src="js/utileria.js" defer></script>
```

---

##  Uso y Ejemplos de Código Embebido

A continuación se detalla el uso real de las 6 funciones obligatorias y las 2 funciones adicionales de la sección libre:

### 1. Validaciones del Módulo de Login
```javascript
// Validación de Correo Electrónico
const correoInput = "correo@ejemplo.com";
if (validarCorreo(correoInput)) {
    console.log("El formato del correo es correcto.");
}

// Validación de Contraseña Estricta (Mayúscula, minúscula, número, carácter especial y min. 8 caracteres)
const passwordInput = "Koplesito32.";
if (validarPassword(passwordInput)) {
    console.log("Contraseña segura y válida.");
}
```

### 2. Validaciones del Módulo de Registro
```javascript
// Validación de texto (Solo letras y espacios, acepta acentos)
const nombreInput = "Oscar Zuriel";
if (soloLetras(nombreInput)) {
    console.log("Nombre válido.");
}

// Validación de longitud máxima para campos numéricos
const telefonoInput = "9512756492";
if (validarLongitud(telefonoInput, 10)) {
    console.log("La longitud del número es correcta.");
}
```

### 3. Cálculo y Control de Edades
```javascript
const fechaNac = "2004-05-25";

// Obtener la edad exacta como número entero
const edadCalculada = calcularEdad(fechaNac); // Retorna: 22

// Verificar si cumple con la mayoría de edad (>= 18)
if (esMayorDeEdad(fechaNac)) {
    console.log(`Acceso permitido. Edad: ${edadCalculada} años.`);
}
```

### 4. Sección Libre (Funciones Adicionales de la Interfaz)
* **`validarTelefono(telefono)`**: Verifica mediante expresiones regulares dedicadas que la cadena contenga exactamente 10 dígitos numéricos correspondientes a una línea telefónica válida.
* **`generarIdUnico()`**: Crea un token alfanumérico aleatorio ideal para simular identificadores únicos de sesión (UID) o llaves temporales de transacciones.

```javascript
// Validación rápida de teléfono
const esTelValido = validarTelefono("9512756492"); // Retorna: true

// Generación de identificador único alfanumérico
const idSesion = generarIdUnico(); // Ejemplo: "23lo8mwz"
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

##  Demo Promocional
[[Haz clic aquí para ver el video demostrativo de Utilería.js en acción](PON_AQUI_EL_LINK_DE_TU_VIDEO) ](https://drive.google.com/file/d/1Xdc3FGTf774LBPxXbHXcOOMP8odg-dv7/view)
