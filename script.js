// ejemplo script.js para cuatro instancias de Hydra
window.onload = function () {
  new Maptastic({
    autoLoad: true,
    autoSave: true,
    layers: [
      document.getElementById("rumiar"),
      document.getElementById("latir"),
      document.getElementById("respirar"),
      document.getElementById("digerir"),
      document.getElementById("expulsar"),
      document.getElementById("caminar"),
    ],
  });
};
