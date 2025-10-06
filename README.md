# 🪟 modalapi.js

**Librería ligera y extensible para crear ventanas modales personalizadas**  
Compatible con [`general.js`](https://cdn.underdevelopment.work/generaljs/general.min.js) y `gdom.js`

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Versión">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Licencia">
  <img src="https://img.shields.io/badge/modular-extensible-orange.svg" alt="Modularidad">
</p>

---

## ✨ Características

| Característica                  | Descripción                                                                 |
|----------------------------------|------------------------------------------------------------------------------|
| ✅ Ligera y sin dependencias     | No requiere frameworks externos                                             |
| 🧩 Modular y extensible          | Compatible con plugin systems y `g(selector)`                              |
| 🎞️ Animaciones configurables     | Soporta `fade`, `slide` o sin animación                                    |
| 📁 Soporte para múltiples modales| Control de stacking con `z-index` dinámico                                 |
| 🔄 Actualización dinámica        | Modifica contenido, botones o título sin cerrar el modal                   |
| 🧠 Callbacks personalizados      | `onOpen`, `onClose`, `onAction` para trazabilidad                          |
| 🧃 Cierre por ESC o clic externo | Mejora accesibilidad y control del usuario                                 |
| 📱 Responsive por defecto        | Adaptable a pantallas móviles y tablets                                    |

---
## 🧠 Funciones disponibles

| Método                        | Descripción                                                                 |
|-------------------------------|------------------------------------------------------------------------------|
| `modalapi.open(opts)`         | Crea y muestra un nuevo modal con opciones personalizadas                   |
| `modalapi.close(id)`          | Cierra el modal con el ID especificado                                      |
| `modalapi.closeAll()`         | Cierra todos los modales activos                                            |
| `modalapi.update(id, updates)`| Actualiza contenido, botones o título de un modal existente                 |
| `modalapi.isOpen(id)`         | Verifica si un modal está abierto                                           |
| `modalapi.getConfig(id)`      | Devuelve la configuración actual del modal                                  |
| `modalapi.getOpenModals()`    | Lista todos los IDs de modales abiertos                                     |

## ⚙️ Opciones disponibles para `modalapi.open()`

| Opción                  | Tipo       | Descripción                                                                 | Valor por defecto         |
|-------------------------|------------|------------------------------------------------------------------------------|----------------------------|
| `id`                    | `string`   | Identificador único del modal                                               | `"modal-" + timestamp`     |
| `title`                 | `string`   | Título que se muestra en el encabezado del modal                            | `""`                       |
| `content`               | `string`   | HTML o texto que se muestra en el cuerpo del modal                          | `""`                       |
| `buttons`               | `array`    | Botones personalizados con `label`, `class`, `action`, `closeOnClick`       | `[]`                       |
| `closable`              | `boolean`  | Muestra botón de cierre (`×`) en el encabezado                              | `true`                     |
| `overlay`               | `boolean`  | Muestra fondo oscuro detrás del modal                                       | `true`                     |
| `width`                 | `string`   | Ancho del modal (ej. `"400px"`, `"80%"`)                                    | `"400px"`                  |
| `animation`             | `string`   | Tipo de animación (`"fade"`, `"slide"`, `"none"`)                           | `"fade"`                   |
| `closeOnEsc`            | `boolean`  | Permite cerrar el modal con la tecla ESC                                    | `true`                     |
| `closeOnOutsideClick`   | `boolean`  | Permite cerrar el modal al hacer clic fuera del contenido                   | `true`                     |
| `onOpen`                | `function` | Callback que se ejecuta al abrir el modal                                   | `null`                     |
| `onClose`               | `function` | Callback que se ejecuta al cerrar el modal                                  | `null`                     |
| `onAction`              | `function` | Callback que se ejecuta al presionar cualquier botón del modal              | `null`                     |
| `meta`                  | `object`   | Objeto libre para almacenar metadata personalizada por modal                | `{}`                       |

## 🔘 Atributos disponibles para cada botón

Cada objeto dentro del array `buttons` en `modalapi.open()` puede tener los siguientes atributos:

| Atributo         | Tipo       | Descripción                                                                 | Valor por defecto |
|------------------|------------|------------------------------------------------------------------------------|-------------------|
| `label`          | `string`   | Texto que se muestra en el botón                                            | `""`              |
| `class`          | `string`   | Clase CSS personalizada para estilizar el botón                             | `"modal-btn"`     |
| `action`         | `function` | Función que se ejecuta al hacer clic en el botón                            | `null`            |
| `closeOnClick`   | `boolean`  | Indica si el modal debe cerrarse al hacer clic en el botón                  | `true`            |

## 🧩 Guía visual para armar una ventana modal con gdom.js

Puedes abrir modales directamente desde cualquier elemento usando `g(selector).openModal({...})`.  
Esto permite una integración declarativa y modular con tu ecosistema `general.js`.

## 📦 Changelog

| Versión  | Fecha       | Cambios realizados                                                                 |
|----------|-------------|------------------------------------------------------------------------------------|
| `v1.0.0` | 2025-10-05   | Versión inicial con sistema de modales autoejecutable, ligero y sin dependencias  |
|          |              | Soporte para múltiples modales simultáneos con control de stacking (`z-index`)    |
|          |              | Animaciones configurables: `fade`, `slide`, o sin animación                       |
|          |              | Callbacks personalizados: `onOpen`, `onClose`, `onAction`                         |
|          |              | Cierre por tecla ESC y clic fuera del contenido                                   |
|          |              | Actualización dinámica con `update(id, updates)`                                  |
|          |              | Dataset y metadata por modal para trazabilidad y auditoría                        |
|          |              | Integración declarativa con `g(selector).openModal({...})`                        |
|          |              | Estilos CSS responsive y personalizables incluidos                                |

### 🧪 Ejemplo completo

```html
<button id="btnAbrir">Abrir modal</button>


## 🧪 Ejemplos de uso

### 📍 Modal básico con botones

```javascript
modalapi.open({
  title: "Confirmación",
  content: "<p>¿Deseas continuar con esta acción?</p>",
  buttons: [
    { label: "Sí", class: "btn-yes", action: () => console.log("Confirmado") },
    { label: "Cancelar", class: "btn-cancel" }
  ]
});
```

### Cómo crearlo con gdom.js
```javascript
g('#btnAbrir').click(() => {
  g('#btnAbrir').openModal({
    title: "Bienvenido",
    content: "<p>Este es un modal generado con gdom.js</p>",
    buttons: [
      {
        label: "Aceptar",
        class: "btn-primary",
        action: () => console.log("Aceptado")
      },
      {
        label: "Cerrar",
        class: "btn-secondary"
      }
    ],
    animation: "slide",
    closeOnEsc: true,
    closeOnOutsideClick: true,
    onOpen: () => console.log("Modal abierto"),
    onClose: () => console.log("Modal cerrado"),
    onAction: label => console.log("Botón presionado:", label),
    meta: { origen: "gdom", tipo: "informativo" }
  });
});
```

### 🧠 Modal con callbacks personalizados

```javascript
modalapi.open({
  title: "Eliminar archivo",
  content: "<p>Esta acción no se puede deshacer.</p>",
  buttons: [
    { label: "Eliminar", class: "btn-danger", action: () => eliminarArchivo() },
    { label: "Cancelar", class: "btn-secondary" }
  ],
  onOpen: () => console.log("Modal abierto"),
  onClose: () => console.log("Modal cerrado"),
  onAction: label => console.log("Botón presionado:", label)
});
```

### 🔄 Actualizar contenido dinámicamente

```javascript
modalapi.update("modal-1696530000000", {
  title: "Procesando...",
  content: "<p>Por favor espera mientras se completa la operación.</p>",
  buttons: []
});
```

### 🧃Cierre por teclado y clic externo

```javascript
modalapi.open({
  title: "Acceso restringido",
  content: "<p>Debes iniciar sesión para continuar.</p>",
  closeOnEsc: true,
  closeOnOutsideClick: true
});
```

## 📦 Instalación

### CDN
```html
<script src="https://cdn.underdevelopment.work/generaljs/modalapi.js"></script>
