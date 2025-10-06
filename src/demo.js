modalapi.open({
  title: "Confirmación",
  content: "<p>¿Deseas continuar?</p>",
  buttons: [
    { label: "Sí", class: "btn-yes", action: () => console.log("Confirmado") },
    { label: "Cancelar", class: "btn-cancel" }
  ]
});
  