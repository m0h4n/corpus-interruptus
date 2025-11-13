// ejemplo script.js para cuatro instancias de Hydra
window.onload = function () {
  new Maptastic({
    autoLoad: true,
    autoSave: true,
    layers: [
      document.getElementById("pared1"),
      document.getElementById("pared2"),
      document.getElementById("fondo"),
      document.getElementById("techo"),
    ],
  });
};
