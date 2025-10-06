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
